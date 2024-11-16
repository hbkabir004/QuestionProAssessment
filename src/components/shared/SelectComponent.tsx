import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { OptionType, SelectComponentProps } from "../../models/card";

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
