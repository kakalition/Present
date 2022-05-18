export default function RememberMeComponent() {
  return (
    <label className="flex items-center font-ibm-plex-sans text-lg" htmlFor="remember_me">
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
