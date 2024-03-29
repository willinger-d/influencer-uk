import EventModel from "./EventModel";
import Consequences from "./Consequences";

const Events = [
    new EventModel(
        "Нове фото",
        "Настав час для нового фото на вашому каналі в соціальних мережах. Як ви хочете себе представити?",
        "Яку свою фотографію ви хочете опублікувати?",
        "Креативно поставлене фото з вашого останнього відпочинку",
        "Знімок, на якому ви показуєте себе з кількома прищиками",
        new Consequences("Ви отримуєте багато лайків, і бренд хоче рекламуватися з вами",
            0,
            +3,
            +2,
            0
        ),
        new Consequences(
            "Більшості ваших шанувальників сподобалося ваше фото. Ви також отримуєте заохочення від нових підписників",
            +2,
            +3,
            0,
            0
        )),
    new EventModel(
        "Відео із зіркою соцмереж",
        "Відома зірка соціальних мереж хоче зняти з вами відео. Насправді вона тобі не подобається",
        "Що ти робиш?",
        "Знімай відео, воно приверне багато уваги!",
        "Скасуй відео, мені не хочеться",
        new Consequences("Відео набирає багато переглядів, але ваші шанувальники вважають ваш виступ смішним. До того ж, зйомки забрали багато часу",
            +3,
            -1,
            0,
            -1
        ),
        new Consequences(
            "Зірка соціальних мереж вважає ваше скасування дурницею і публічно про це заявляє",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Реклама продукту",
        "Ви отримали два запити від компаній, які хочуть, щоб ви прорекламували їхній продукт у ваших соціальних мережах. Ви вирішуєте прийняти ще одну рекламну пропозицію",
        "Яку з них ви приймаєте?",
        "Реклама продукту, про який ви ще не чули нічого хорошого, але який приносить вам багато грошей",
        "Реклама продукту, який, на вашу думку, чудовий, але ви не отримуєте за нього багато грошей",
        new Consequences("Ваші шанувальники дотримуються ваших рекомендацій, купують продукт і розчаровуються",
            0,
            -2,
            +3,
            0
        ),
        new Consequences(
            "Ваші шанувальники люблять продукт так само, як і ви",
            0,
            +3,
            +2,
            0
        )),
    new EventModel(
        "Свята",
        "Наближається ваша наступна відпустка - нарешті ви зможете провести час із сім'єю. Вона мала бути повністю приватною, але готель пропонує вам гроші та розкішний номер, якщо ви поділитеся відпочинком у своїх акаунтах у соціальних мережах",
        "Що ви робите?",
        "Висвітлюйте свято у своїх соціальних мережах",
        "Заплатіть собі і не супроводжуйте свято у своїх соціальних мережах",
        new Consequences("Оплачена відпустка і багато матеріалу для ваших соціальних мереж. Але ви змогли провести з сім'єю менше часу, ніж планували",
            +2,
            0,
            +2,
            -1
        ),
        new Consequences(
            "Ви нарешті змогли відпочити і провести час з близькими",
            0,
            -1,
            -1,
            +3
        )),
    new EventModel(
        "Образливі коментарі",
        "Ви продовжуєте отримувати образливі коментарі у своєму профілі в соціальних мережах. Це дійсно починає тебе діставати",
        "Що ви робите?",
        "Напиши дотепний пост проти ненависті в Інтернеті",
        "Просто видаляй коментарі",
        new Consequences("Ви отримуєте багато підтримки від інших медіа-зірок, і ваші шанувальники хвалять вашу поведінку",
            +2,
            +3,
            0,
            0
        ),
        new Consequences(
            "Деякі підписники критикують вас за те, що ви видаляєте коментарі, але поки що у вас виходить краще",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Нещодавно закохався",
        "Ви щойно закохалися. Насправді ви ще не хочете представляти своє нове захоплення громадськості. Але твої шанувальники постійно просять про це на твоїх акаунтах у соціальних мережах",
        "Що ти робиш?",
        "Ти представляєш цю людину публічно і влаштовуєш великий спектакль у своєму профілі в соціальних мережах",
        "Ви просите своїх шанувальників зрозуміти, що хочете зберегти своє кохання в таємниці",
        new Consequences("Ваш пост привертає багато уваги, ви подобаєтеся шанувальникам як пара",
            +2,
            +2,
            0,
            -1
        ),
        new Consequences(
            "Ваші шанувальники розуміють вас, але все одно сподіваються скоро дізнатися більше",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Фейкова бійка",
        "Твоя подруга дуже успішна у своїх соціальних мережах. Вона пропонує вам обом прикинутися, що у вас справжня сварка, і що ви погано говорите один про одного у своїх постах. Це, безумовно, приверне до вас багато уваги",
        "Що ти робиш?",
        "Ти приєднуєшся, це точно приверне багато уваги",
        "Це звучить не дуже добре, ви відкидаєте це.",
        new Consequences("Ваші відео привертають багато уваги, і ви навіть отримуєте запити з телебачення! Але тебе часто зображують як поганого хлопця. Чи турбує вас це?",
            +2,
            -1,
            +1,
            -1
        ),
        new Consequences(
            "Подруга влаштовує бійку з іншою подругою і привертає до себе багато уваги. Інтерес ЗМІ до тебе дещо зменшується",
            -2,
            0,
            0,
            +3
        )),
    new EventModel(
        "Запит на участь у телешоу",
        "Вас запросили взяти участь у двох телешоу",
        "У якому з них ви візьмете участь?",
        "В успішному розважальному шоу, де є багато випробувань, які потрібно подолати, і часто влаштовуються скандали між учасниками",
        "У помірно успішному кулінарному шоу, де ви готуєте разом з іншими зірками заради доброї справи і менше уваги приділяється особистому життю учасників",
        new Consequences("Багато людей дивляться шоу. Деяка ваша особиста інформація стає відомою",
            +2,
            0,
            +1,
            -2
        ),
        new Consequences(
            "На шоу було не так багато глядачів, але ваш виступ був добре сприйнятий",
            +1,
            +3,
            +1,
            0
        )),
    new EventModel(
        "Розставання зіркової пари",
        "Зіркова пара, які були друзями, розлучилася. Журнал пліток хоче взяти у вас інтерв'ю про них",
        "Що ти робиш?",
        "Ви даєте інтерв'ю і розкриваєте інтимні подробиці їхніх стосунків",
        "Ти відмовляєшся, бо вважаєш, що їхні стосунки нікого не стосуються",
        new Consequences("Світська хроніка хоче працювати з вами частіше. Але пара, з якою ти дружиш, не хоче мати з тобою більше нічого спільного",
            +3,
            0,
            0,
            -2
        ),
        new Consequences(
            "Журнал шукає когось іншого для інтерв'ю і більше не звертатиметься до вас у майбутньому",
            -1,
            0,
            -1,
            3
        )),
    new EventModel(
        "Презентація телевізійних шоу",
        "Ви отримали пропозицію від двох телевізійних шоу бути ведучим",
        "Яке з них ви оберете?",
        "Щотижневе кастинг-шоу, де тон часто різкий",
        "Одноразовий благодійний вечір",
        new Consequences("Вас щотижня показують по телевізору, і про вас є що сказати",
            +3,
            0,
            +2,
            0
        ),
        new Consequences(
            "Ваша прихильність до тих, хто потребує допомоги, дуже добре сприймається громадськістю",
            +1,
            +3,
            +1,
            0
        )),
    new EventModel(
        "Ваш власний подкаст",
        "Ви отримаєте пропозицію для власного подкасту",
        "На якій темі ви хотіли б зосередитися?",
        "Переважно на популярних темах, які цікавлять якомога більшу кількість людей. Ви намагаєтеся максимально реагувати на побажання своїх шанувальників",
        "Ви використовуєте можливість для нішевої теми, яка вже давно близька вашому серцю. Ви залучаєте багато експертів, навіть якщо отримуєте менше часу для виступу.",
        new Consequences("Вашим шанувальникам подобається, що ви реагуєте на їхні тематичні пропозиції. Однак ваша концепція не є добре продуманою і не має достатньої кількості слухачів у довгостроковій перспективі",
            +2,
            +2,
            +1,
            0
        ),
        new Consequences(
            "Подкаст має повний успіх, але лише у невеликої групи глядачів. Проте вони залишаються лояльними до вас протягом тривалого часу",
            +1,
            +2,
            +2,
            0
        )),
    new EventModel(
        "Радіо-інтерв'ю",
        "Вас запрошують на відому радіостанцію для інтерв'ю. У прямому ефірі вам ставлять багато особистих запитань. Як ви реагуєте?",
        "Що ви робите?",
        "Ви не вдаєтеся в деталі і намагаєтеся говорити про щось інше",
        "Ви говорите нестандартно і відповідаєте на всі запитання",
        new Consequences("Аудиторія вважає ваше інтерв'ю цікавим. Але те, що ви ухилилися від особистих запитань, сприймається менш позитивно",
            +2,
            -2,
            0,
            +1
        ),
        new Consequences(
            "Ви розкрили багато приватної інформації, не тільки про себе, але й про коло своїх друзів. Глядачам подобається ваша відкритість",
            +1,
            +2,
            0,
            -2
        )),
    new EventModel(
        "Ярмарок автографів",
        "Ви повинні були роздавати автографи своїм шанувальникам на ярмарку. Але їх прийшло так багато, що після багатьох годин роботи перед вами вишикувалася черга",
        "Що ти робиш?",
        "Ти вибачаєшся перед фанатами і відкладаєш їх на інший день. Хочеш провести вільний час з друзями",
        "Ти продовжуєш, бо не хочеш розчаровувати своїх фанатів.Заради цього ви скасовуєте зустріч з друзями",
        new Consequences("Твої друзі з нетерпінням чекають, щоб провести з тобою вечір.         Деякі шанувальники розчаровані, їм довелося довго чекати і вони навіть не бачили вас. Дехто навіть відписався від вас у соціальних мережах",
            -1,
            -2,
            0,
            +2
        ),
        new Consequences(
            "Ваші шанувальники щасливі, що отримали автограф. Ваші друзі розчаровані вашим скасуванням",
            0,
            +3,
            0,
            -2
        )),
    new EventModel(
        "Фанати під час шопінгу",
        "Під час шопінгу ви зустрічаєте групу шанувальників, які хочуть сфотографуватися з вами.Ви сьогодні почуваєтеся трохи зле і насправді просто хотіли купити щось поїсти в спокої",
        "Що ти робиш?",
        "Ти кажеш фанатам, що тобі приємна увага, але ти сьогодні погано себе почуваєш і тому не хочеш фотографуватися",
        "Ви намагаєтеся не показувати свій дискомфорт і посміхаєтеся в камеру",
        new Consequences("Фанати незадоволені і поширюють свою думку про вас у своїх профілях у соціальних мережах",
            0,
            -2,
            0,
            +3
        ),
        new Consequences(
            "Фанати задоволені, але ви почуваєтеся некомфортно, і вам також не дуже подобається фотографія",
            0,
            +2,
            0,
            -3
        )),
    new EventModel(
        "Зустріч з фанатами",
        "Ви хочете організувати фан-зустріч",
        "Як це має виглядати?",
        "Безкоштовна зустріч для всіх у громадському місці",
        "Зустріч в екстравагантному місці, де вхід коштує кілька євро",
        new Consequences("Приїжджає багато шанувальників, які з нетерпінням чекають на зустріч з вами. На жаль, все настільки зайнято, що не всі мають можливість познайомитися з вами",
            +3,
            +2,
            0,
            0
        ),
        new Consequences(
            "Зустріч проходить чудово, і всі учасники можуть коротко познайомитися з вами. Однак деякі фанати не отримали більше квитків і вважають принципово незрозумілим те, що ви просите гроші",
            +2,
            +1,
            +2,
            0
        )),
    new EventModel(
        "Смерть домашнього улюбленця",
        "На цьому тижні помер ваш домашній улюбленець, але ви організували зустріч з фанатами і концерт через два дні. Ви не відчуваєте, що хочете цього зараз",
        "Ти все ще збираєшся це зробити?",
        "JТак, звісно, я мушу це зробити",
        "Ні, я все скасовую і пояснюю фанатам, чому. Я не можу зараз посміхатися",
        new Consequences("Зустріч з фанатами проходить добре. Але після неї ти повністю виснажений",
            +1,
            +2,
            0,
            -2
        ),
        new Consequences(
            "Деякі фанати засмучені, інші можуть зрозуміти твоє рішення. У вас є час, щоб відновитися",
            0,
            0,
            0,
            +5
        )),
    new EventModel(
        "Фанати на порозі",
        "Ви прокидаєтеся вранці і бачите групу фанатів, які стоять біля ваших дверей і чекають на вас",
        "Що ви робите?",
        "Ти не висовуєшся і вислизаєш через чорний хід. Сподіваєшся, що тебе ніхто не бачив",
        "Ти радієш увазі і вітаєшся з ними з балкона",
        new Consequences(
            "Вам пощастило, ніхто не помітив і ваше місцезнаходження не підтвердилося. Але ти дивуєшся, звідки вони знають твою адресу",
            +2,
            -1,
            0,
            -2
        ),
        new Consequences(
            "Через деякий час вони втрачають інтерес і йдуть самі. Однак тепер ваша адреса відома",
            +2,
            +1,
            0,
            -2
        )),
    new EventModel(
        "Екскурсія по квартирі",
        "Ви пообіцяли своїм шанувальникам в опитуванні в соціальних мережах, що незабаром проведете екскурсію своїм будинком і знімете все на відео. Але тепер, озираючись назад, ви відчуваєте себе некомфортно, показуючи всю свою квартиру",
        "Що ви робите?",
        "Поясни причини своїм шанувальникам. Вони зрозуміють",
        "Ви знімаєте відео, але показуєте лише частину свого будинку",
        new Consequences("Деякі з ваших шанувальників дуже розчаровані, інші думають, що це добре, що ви стоїте за себе",
            -2,
            0,
            0,
            +3
        ),
        new Consequences(
            "Багато шанувальників вважають дивним, що ви показуєте лише уривки. Ваше відео здається їм не таким автентичним, як зазвичай",
            +1,
            -2,
            0,
            -2
        )),
]

export default Events