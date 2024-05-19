import React, { createContext, useEffect, useState } from "react";
import mongoose from 'mongoose'; // Importe o mongoose

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ id: null });

    useEffect(() => {
        const userObjectId = localStorage.getItem("user_id"); // Recupera o ObjectID do usuário do localStorage

        if (userObjectId) {
            // Converte a string do ObjectID de volta para o formato correto do MongoDB
            const objectId = mongoose.Types.ObjectId(userObjectId);
            setUser({ id: objectId }); // Define o ObjectID do usuário no estado local
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    
        const hasUser = usersStorage?.find((user) => user.email === email);
    
        if(hasUser){
            if(hasUser.email === email && hasUser.password === password){
                // Armazenar diretamente o ObjectID do usuário no localStorage após o login bem-sucedido
                localStorage.setItem("user_id", hasUser.id);
                
                setUser({ id: hasUser.id, ...hasUser });
                return;
            } else {
                return "E-mail ou senha incorretos.";
            }
        } else {
            return "Usuário não cadastrado.";
        }
    };
    
    

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length){
            return "Já existe uma conta com esse e-mail.";
        }

        let newUser;

        if (usersStorage){
            const newUserId = new mongoose.Types.ObjectId(); // Gera um novo ObjectID
            newUser = [...usersStorage, { id: newUserId, email, password }];
        } else {
            const newUserId = new mongoose.Types.ObjectId(); // Gera um novo ObjectID
            newUser = [{ id: newUserId, email, password }];
        }
        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser({ id: null });
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_id"); // Remove o ObjectID do usuário do localStorage ao fazer logout
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user.id, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
