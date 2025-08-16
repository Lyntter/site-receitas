export default function Header() {
    //scrips
    return (
        //HTML
        <>
            <div className='imgw'>
                <div className='menutop'>
                    <a href='#'>Home</a>
                    <div className='dropdown'>
                        <span>Receitas</span>
                        <div className="dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                </div>
                <div className='blackbox'></div>
                <img src="/resources/topimage.png"></img>


                <div className='box-login'>
                    <button>Login</button>
                </div>
            </div>


        </>
    )
}