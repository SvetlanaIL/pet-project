import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

//Тестовый компонент
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrowError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrowError}>
            throw error
        </Button>
    );
};
