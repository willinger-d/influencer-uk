import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import Stat from "./Stat";
import {useContext} from "react";
import {StatsContext} from "../context/StatsContext";

const Header = ({end}) => {
    const {
        notorietyState: [noto],
        popularityState: [pop],
        moneyState: [money],
        privateLifeState: [life],
    } = useContext(StatsContext);

    let sx = {
        justifyContent: "space-around",
        columnGap: 4,
        flexWrap: "wrap",
        maxWidth: 700,
        margin: "0 auto",
    };
    return <>
        <AppBar position="static">
            {end && <Box p={5}/>}
            {end &&<Toolbar sx={sx}>
                <Typography variant={"h3"}>Dein Ergebnis</Typography>
            </Toolbar>}
            <Toolbar sx={sx}>
                <Stat label={"Поінформованість"} value={noto}/>
                <Stat label={"Популярність"} value={pop}/>
                <Stat label={"Гроші"} value={money}/>
                <Stat label={"Приватне життя"} value={life}/>
            </Toolbar>
            {end && <Box p={5}/>}
        </AppBar>
    </>;
};

export default Header