import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>this is the header , dont try to overlap me </h1>
            <nav class="nav">
                <a href="/home">Home</a>
                <a href="/docs">Docs</a>
                <a href="/blogs">Blogs</a>
            </nav>
        </div>
    );
};

export default Header;