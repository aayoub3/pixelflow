function Footer(){
    return(
        <footer 
            id="home-footer"
            className="text-center text-xs font-light tracking-widest text-neutral-400 py-4"
        >
            <p className="leading-relaxed">
                Photography & Videography Services <br />
                www.facebook.com/pixelflowcreation <br />
                www.instagram.com/pixelflowcreation
            </p>
            <p className="mt-2 tracking-[0.25em]">
                &copy; {new Date().getFullYear()} PIXEL FLOW
            </p>
        </footer>
    );
}
export default Footer;