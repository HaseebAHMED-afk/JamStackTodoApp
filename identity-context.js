const React = require('react');
const netlifyIdentitiy = require('netlify-identity-widget');

const IdentityContext = React.createContext({});

exports.IdentityContext = IdentityContext;

const IdentityProvider = ({children}) => {
    const [user,setUser] = React.useState();

    React.useEffect(() => {
        netlifyIdentitiy.init({});
    })

    netlifyIdentitiy.on('login' , (user) => {
        netlifyIdentitiy.close();
        setUser(user)
    })

    netlifyIdentitiy.on('logout' , (user) => {
        netlifyIdentitiy.close();
        setUser('')
    })


    return (
        <IdentityContext.Provider value={{netlifyIdentitiy , user}} >
            {children}
        </IdentityContext.Provider>
    )
}


exports.Provider = IdentityProvider;