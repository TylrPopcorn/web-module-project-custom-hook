
import useLocalStorage from "../components/useLocalStorage"

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", initialValue)

    return [darkMode, setDarkMode]
}

export default useDarkMode;