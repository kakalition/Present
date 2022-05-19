export default function RememberMeComponent() {
  return (
    <label className="flex items-center text-lg font-ibm-plex-sans" htmlFor="remember_me">
      <input
        className="w-5 h-5"
        type="checkbox"
        id="remember_me"
        name="remember_me"
        value="true"
      />
      <div className="w-2" />
      Remember me?
    </label>
  );
}
