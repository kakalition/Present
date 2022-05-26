import React from 'react';

export default function FileInputComponent({
  onFileChange,
}: { onFileChange: React.ChangeEventHandler<HTMLInputElement> }) {
  return (
    <label htmlFor="file" className="flex flex-col items-start py-2 pr-12 pl-4 text-lg font-medium text-white cursor-pointer font-ibm-plex-sans bg-primary-button">
      Upload file
      <input
        className="hidden"
        type="file"
        accept="audio/*"
        id="file"
        name="file"
        onChange={onFileChange}
        required
      />
    </label>
  );
}
