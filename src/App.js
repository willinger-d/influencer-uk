import {useContext, useState} from "react"
import EventComponent from "./component/Event";
import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
import {StatsContext} from "./context/StatsContext";
import Events from "./model/Events";
import Header from "./component/Header";

const App = () => {
    const {
        notorietyState: [, setNoto],
        popularityState: [, setPop],
        moneyState: [, setMoney],
        privateLifeState: [, setLife],
    } = useContext(StatsContext);
    const [index, setIndex] = useState(0)
    const end = index >= Events.length;
    const [tab, setTab] = useState(0)
    const [select, setSelect] = useState(false)

    return (
        <>
            <Header end={end}/>
            <Box sx={{
                p: 1,
                width: 1.0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: 500,
                margin: "0 auto"
            }}>


                {!select &&
                    <>
                        <Box width={1.0} marginBottom={1}>
                            <Tabs variant="fullWidth" value={tab} onChange={(e, v) => setTab(v)}>
                                <Tab label="Sam Salamanca"/>
                                <Tab label="Ann Sunshine"/>
                                <Tab label="Melody Mysterious"/>
                                <Tab label="Flynn Förster"/>
                            </Tabs>
                        </Box>
                        <Box>
                            {tab === 0 && <>
                                <Typography> Колись ви брали участь у телевізійному кастингу і в результаті стали відомим.
                                    Відомим. Зараз вас знають не так багато людей. Ти хочеш це змінити і
                                    плануєш новий старт! Слава і заробіток - це твої головні пріоритети!
                                    Головне, щоб люди знали твоє обличчя та ім'я. Для цього ти намагаєшся бути
                                    бути якомога привабливішим і симпатичнішим та передавати певний статус.
                                    Статус.</Typography>
                            </>}
                            {tab === 1 && <>
                                <Typography>Ви - професійний музичний співак і                                тепер хочеш стати відомим у соціальних мережах.Для вас особливо важливо
                                    важливо, щоб ви виглядали достовірним                                і викликати довіру у ваших шанувальників.Ви                                хочете, щоб ваші шанувальники любили вас
                                    любили вас. Натомість, ви також ризикуєте                                заробляти менше грошей або розкривати приватну
                                    інформацію про себе.</Typography>
                            </>}
                            {tab === 2 && <>
                                <Typography>Ви переважно активні на платформах соціальних мереж                                    активні і, безумовно, хотіли б стати
                                    стати більш відомим. Ваші улюблені заняття                                    креативні відео та містичні фото, а також
                                    і намагатися передати загадковий образ                                    образ. Ви також зрозуміли, що
                                    що цим також можна заробляти гроші. Більше цього                                    більше цього!</Typography>
                            </>}
                            {tab === 3 && <>
                            <Typography>Ти гандболістка і тебе викликали до національної збірної U21                                національної збірної U21. Віднедавна
                                ти також ведеш свій канал у соціальних мережах.                                Ти приземлений і природний                                сім'я та особисте життя дуже важливі для тебе.                                дуже важливе для вас.Тим не менш, ви хотіли б                                контактувати зі своїми шанувальниками.Крім того                                ви зацікавлені у співпраці з певними
                                брендами і хотіли б використати свою
                                свою популярність на добру справу.</Typography>
                            </>}
                            <Box p={1} display={"flex"} justifyContent={"center"}>
                                <Button variant={"contained"} onClick={() => setSelect(true)}>Виберіть</Button>
                            </Box>
                                <img src={`./${tab + 1}.png`} alt="" style={{width: "100%"}}/>

                        </Box>
                    </>
                }

                {select &&
                    <>
                        {!end && <EventComponent event={Events[index]} next={() => setIndex(index + 1)}/>}
                        {end && <>
                            <Box
                                sx={{
                                    width: 1.0,
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: 4,
                                    p: 4
                                }}>
                                <Typography variant={"h3"}>Знову?</Typography>
                                <Typography><Button variant={"outlined"} onClick={() => {
                                    setIndex(0)
                                    setNoto(0)
                                    setPop(0)
                                    setMoney(0)
                                    setLife(0)
                                }}>Почніть спочатку.</Button></Typography>
                            </Box>
                        </>}
                    </>

                }


            </Box>
        </>
    );
};

export default App;
