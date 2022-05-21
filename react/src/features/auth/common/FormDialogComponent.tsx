import React from 'react';

type Props = {
  header: React.ReactNode,
  body: React.ReactNode,
  formComponent: React.ReactNode,
  buttonComponent: React.ReactNode,
};

export default function FormDialogComponent({
  header, body, formComponent, buttonComponent,
}: Props) {
  return (
    <div className="w-full bg-white md:w-[75%] lg:w-[55%]">
      {header}
      <div className="h-4" />
      {body}

      <div className="h-8" />
      <div className="mx-8 border-t-2 border-t-slate-300" />
      <div className="h-8" />

      <div className="mx-8">{formComponent}</div>

      <div className="h-12" />
      {buttonComponent}
    </div>
  );
}
