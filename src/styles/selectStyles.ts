import { StylesConfig } from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

export const customStyles: StylesConfig<OptionType, false> = {
    control: (base, state) => ({
        ...base,
        width: '300px',
        padding: '4px',
        borderRadius: '9999px',
        borderWidth: '2px',
        borderColor: state.isFocused ? '#a855f7' : '#d8b4fe',
        boxShadow: state.isFocused ? '0 0 0 2px #f3e8ff' : 'none',
        '&:hover': {
            borderColor: '#c084fc'
        },
        backgroundColor: 'white',
        cursor: 'pointer',
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected 
            ? '#a855f7' 
            : state.isFocused 
                ? '#f3e8ff' 
                : 'white',
        color: state.isSelected ? 'white' : '#6b21a8',
        cursor: 'pointer',
        '&:active': {
            backgroundColor: '#a855f7'
        },
        padding: '10px 16px',
    }),
    menu: (base) => ({
        ...base,
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    }),
    placeholder: (base) => ({
        ...base,
        color: '#6b21a8',
    }),
    singleValue: (base) => ({
        ...base,
        color: '#6b21a8',
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: '#a855f7',
        '&:hover': {
            color: '#6b21a8'
        }
    }),
    loadingMessage: (base) => ({
        ...base,
        color: '#6b21a8',
    }),
    noOptionsMessage: (base) => ({
        ...base,
        color: '#6b21a8',
    }),
}; 