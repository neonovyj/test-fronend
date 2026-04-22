import React from 'react';
import {Icon} from "./Icon.jsx";

export function Modal({user, onClose}) {
    if (!user) return null;

    const fields = [
        {label: 'Телефон:', value: user.phone},
        {label: 'Почта:', value: user.email},
        {label: 'Дата приема:', value: user.hire_date},
        {label: 'Должность:', value: user.position_name},
        {label: 'Подразделение:', value: user.department},
    ];

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={e => e.stopPropagation()}>
                <button onClick={onClose}><Icon name="close" width={20} height={20}/></button>
                <h2>{user.name}</h2>
                <div className="info-grid">
                    {fields.map((field, idx) => (
                        <React.Fragment key={idx}>
                            <div className="label">{field.label}</div>
                            <div className="value">{field.value}</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}