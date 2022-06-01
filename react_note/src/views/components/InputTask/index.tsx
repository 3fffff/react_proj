import React, { useState, useCallback } from 'react'

import styles from './index.module.scss'

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, value: string) => void;
    onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
    id,
    title,
    onDone,
    onEdited,
    onRemoved
}) => {
    const [checked, setChecked] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [value,setValue] = useState(title)
    return (
        <div className={styles.inputTask}>
            <label>
                <input type='checkbox' disabled={isEditMode} className={styles.TaskCheckbox} checked={checked} onChange={(evt) => {
                    setChecked(evt.target.checked)
                    if (evt.target.checked)
                        onDone(id)
                }} />
                {isEditMode ? (<input className={styles.editTaskTitle}
                    onChange={(evt)=>{
                        setValue(evt.target.value)
                    }}
                    value={value}
                />) :
                    (<h3 className={styles.inputTaskTitle}>
                        {title}
                    </h3>)
                }
            </label>
            <button aria-label="Edit"
                className={styles.inputTaskEdit}
                onClick={() => { 
                    isEditMode ? setIsEditMode(false) : setIsEditMode(true) 
                    onEdited(id,value)
                }}
            />
            <button aria-label="Remove"
                className={styles.inputTaskRemove}
                onClick={() => {
                    if (confirm('Are you sure?'))
                        onRemoved(id)
                }}
            />
        </div>
    )
}