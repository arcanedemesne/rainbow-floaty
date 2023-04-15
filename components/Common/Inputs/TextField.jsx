export default ({ label, type, name, placeholder, onChange }) => {
  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={name}
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow"
      />
    </div>
  );
};
