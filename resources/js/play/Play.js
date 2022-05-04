import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export default function Play(props) {
    return (
        <div className="h-screen w-screen bg-slate-800">
            <h1 className="text-white">slkdfjklsdjfldsjlfsjdfljdslfkj</h1>
        </div>
    );
}

createRoot(document.getElementById('test-view'))
    .render(<StrictMode><Play/></StrictMode>)