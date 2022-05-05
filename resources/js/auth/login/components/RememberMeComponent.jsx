export default function RememberMeComponent(props) {
    return (
        <div className="flex items-center">
            <input
                className="h-5 w-5"
                type="checkbox"
                id="remember_me"
                name="remember_me"
                value="true"
            />
            <div className="w-2" />
            <label className="font-ibm-plex-sans text-lg" htmlFor="remember_me">
                Remember me?
            </label>
        </div>
    );
}
