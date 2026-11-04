module.exports = {
    toEntity: (body) => {
        if (!body.senha || typeof body !== 'string') {
            throw new Error('A senha é obrigatoria!')
        }
        return {
            email: body.email,
            senha: body.senha,
            role:  body.role,
            emailVerificado: body.
            emailVerificado || false
        };
    }
};