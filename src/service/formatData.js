export function reformActivityData(datas) {
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

export function reformPerfsData(datas) {
    const data = []
    const frenchType = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"]
    datas.data.map((el, index) => {
        const obj = {
            "subject": frenchType[index],
            "value": +el.value
        }
        data.push(obj)
    })
    return data
}

export function reformSessionData(datas) {
    const dayLabel = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    const data = []
    const { sessions } = datas
    sessions.map((session, index) => {
        data.push({ day: dayLabel[index], sessionLength: session.sessionLength })
    })
    return data
}

export function reformUserData(datas) {
    const { keyData, userInfos, score } = datas
    const { firstName, lastName, age } = userInfos
    const { calorieCount, carbohydrateCount, lipidCount, proteinCount } = keyData
    const data = {
        firstName,
        lastName,
        age,
        score,
        scoreRef: [{ score: 100, fill: "#fff" }, { score: score * 100 }],
        Nutriments: [
            {
                kind: "Calories", value: `${calorieCount}g`
            }, { kind: "Proteines", value: `${proteinCount}g` },
            { kind: "Glucides", value: `${carbohydrateCount}g` },
            { kind: "Lipides", value: `${lipidCount}g` }
        ]
    }
    return data
}