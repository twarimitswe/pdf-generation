export default function Layout({children}){
return (
<html lang="eng">
<body>
<nav>
<a href="/">Home</a> | <a href="/about">About</a>
</nav>
<main>{children}</main>
</body>
</html>
)
};
