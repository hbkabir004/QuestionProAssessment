import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

type OptionType = {
    value: number;
    label: string;
};

type SelectComponentProps = {
    dataUrl: string;                // URL to fetch data from the API
    labelKey: string;               // Key in data to use as label (e.g., "username" or "title")
    valueKey: string;               // Key in data to use as value (e.g., "id")
    placeholder: string;            // Placeholder text for the select component
    onSelect: (id: number | null) => void; // Callback to handle selection
};

const SelectComponent = ({ dataUrl, labelKey, valueKey, placeholder, onSelect }: SelectComponentProps) => {
    const [options, setOptions] = useState < OptionType[] > ([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(dataUrl);
                const options = response.data.map((item: any) => ({
                    value: item[valueKey],
                    label: item[labelKey],
                }));
                setOptions(options);
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };
        fetchData();
    }, [dataUrl, labelKey, valueKey]);

    const handleChange = (selectedOption: OptionType | null) => {
        onSelect(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            options={options}
            onChange={handleChange}
            isClearable
            placeholder={placeholder}
        />
    );
};

export default SelectComponent;
