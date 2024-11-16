import MyComponent from "../components/MyComponent";
import { MyButton } from "../components/shared/MyButton";

const MyComponentPage = () => {
    return (
        <MyComponent>
            <MyButton
                className="bg-blue-500 me-5 p-2 rounded-md text-white"
                btnname="Clickable Button"
            />
            <MyButton
                className="bg-gray-100 me-5 p-2 rounded-md"
                btnname="Dumb Button"
            />
        </MyComponent>
    );
};

export default MyComponentPage;
