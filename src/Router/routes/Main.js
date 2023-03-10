import SideBar from "../../components/SideBar/SideBar"
import {ColorsProvider} from "../../context/ColorsContext"
import ColorDisplay from "../../components/ColorDisplay/ColorDisplay"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function main() {
    return (
        <ColorsProvider>
            <div className="d-flex">
                <SideBar />
                <ColorDisplay />
            </div>
        </ColorsProvider>
    )
}
