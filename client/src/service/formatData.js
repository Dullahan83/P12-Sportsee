export default class Model {
    reformActivityData(datas) {
        const data = []
        const { sessions } = datas

        sessions.forEach(element => {
            const obj = {
                "day": Number(new Date(element.day).getDate()),
                "kilogram": element.kilogram,
                "calories": element.calories
            }
            data.push(obj)
        });
        return data
    }

    reformPerfsData(datas) {
        const data = []
        const frenchType = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"]
        datas.data.reverse().map((el, index) => {
            const obj = {
                "subject": frenchType[index],
                "value": Number(el.value)
            }
            data.push(obj)
        })
        return data
    }

    reformSessionData(datas) {
        const dayLabel = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        const data = []
        const { sessions } = datas
        sessions.map((session, index) => {
            data.push({ day: dayLabel[index], sessionLength: session.sessionLength })
        })
        return data
    }

    reformUserData(datas) {
        const { keyData, userInfos, score } = datas
        const { firstName, lastName, age } = userInfos
        const { calorieCount, carbohydrateCount, lipidCount, proteinCount } = keyData
        const data = {
            firstName,
            lastName,
            age,
            score,
            // scoreRef: [{ name: "scoreRef", value: 100 - (score * 100) }, { name: "score", value: score * 100 }],
            scoreRef: [{ score: 100, fill: "#fff" }, { score: score * 100 }],
            Nutriments: [
                {
                    kind: "Calories", value: `${new Intl.NumberFormat('en-US').format(calorieCount)}kCal`
                }, { kind: "Proteines", value: `${proteinCount}g` },
                { kind: "Glucides", value: `${carbohydrateCount}g` },
                { kind: "Lipides", value: `${lipidCount}g` }
            ]
        }
        return data
    }
}