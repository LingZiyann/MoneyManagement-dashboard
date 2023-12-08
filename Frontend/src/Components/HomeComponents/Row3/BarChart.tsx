import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'

interface BarProps {
    fontSize: number;
}

interface Category{
    food: number,
    personal: number,
    investment: number,
    utilities: number
}

const MyResponsiveBar = (props: BarProps) => {

    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('userId')

    const [janData, setJanData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [febData, setFebData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [marData, setMarData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [aprData, setAprData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [mayData, setMayData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [juneData, setJuneData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [julyData, setJulyData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [augData, setAugData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [sepData, setSepData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [octData, setOctData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [novData, setNovData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [decData, setDecData] = useState<Category>({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });

    async function getDataHandler(){
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${uid}/transactions`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
                }
            });
        const myData = await response.json();
        for (const key in myData){
            if (myData[key].date !== null) {
                const date = new Date(myData[key].date)
                const month = date.getMonth() + 1
                const dataType = myData[key].radioData
                if (month === 1){
                    if (dataType === 'Food'){
                        setJanData(janData => ({
                            ...janData,
                            food: janData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setJanData(janData => ({
                            ...janData,
                            personal: janData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setJanData(janData => ({
                            ...janData,
                            investment: janData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setJanData(janData => ({
                            ...janData,
                            utilities: janData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                } 
                else if (month === 2){
                    if (dataType === 'Food'){
                        setFebData(febData => ({
                            ...febData,
                            food: febData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setFebData(febData => ({
                            ...febData,
                            personal: febData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setFebData(febData => ({
                            ...febData,
                            investment: febData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setFebData(febData => ({
                            ...febData,
                            utilities: febData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 3){
                    if (dataType === 'Food'){
                        setMarData(marData => ({
                            ...marData,
                            food: marData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setMarData(marData => ({
                            ...marData,
                            personal: marData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setMarData(marData => ({
                            ...marData,
                            investment: marData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setMarData(marData => ({
                            ...marData,
                            utilities: marData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 4){
                    if (dataType === 'Food'){
                        setAprData(aprData => ({
                            ...aprData,
                            food: aprData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setAprData(aprData => ({
                            ...aprData,
                            personal: aprData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setAprData(aprData => ({
                            ...aprData,
                            investment: aprData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setAprData(aprData => ({
                            ...aprData,
                            utilities: aprData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 5){
                    if (dataType === 'Food'){
                        setMayData(mayData => ({
                            ...mayData,
                            food: mayData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setMayData(mayData => ({
                            ...mayData,
                            personal: mayData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setMayData(mayData => ({
                            ...mayData,
                            investment: mayData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setMayData(mayData => ({
                            ...mayData,
                            utilities: mayData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 6){
                    if (dataType === 'Food'){
                        setJuneData(juneData => ({
                            ...juneData,
                            food: juneData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setJuneData(juneData => ({
                            ...juneData,
                            personal: juneData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setJuneData(juneData => ({
                            ...juneData,
                            investment: juneData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setJuneData(juneData => ({
                            ...juneData,
                            utilities: juneData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 7){
                    if (dataType === 'Food'){
                        setJulyData(julyData => ({
                            ...julyData,
                            food: julyData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setJulyData(julyData => ({
                            ...julyData,
                            personal: julyData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setJulyData(julyData => ({
                            ...julyData,
                            investment: julyData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setJulyData(julyData => ({
                            ...julyData,
                            utilities: julyData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 8){
                    if (dataType === 'Food'){
                        setAugData(augData => ({
                            ...augData,
                            food: augData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setAugData(augData => ({
                            ...augData,
                            personal: augData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setAugData(augData => ({
                            ...augData,
                            investment: augData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setAugData(augData => ({
                            ...augData,
                            utilities: augData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 9){
                    if (dataType === 'Food'){
                        setSepData(sepData => ({
                            ...sepData,
                            food: sepData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setSepData(sepData => ({
                            ...sepData,
                            personal: sepData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setSepData(sepData => ({
                            ...sepData,
                            investment: sepData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setSepData(sepData => ({
                            ...sepData,
                            utilities: sepData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 10){
                    if (dataType === 'Food'){
                        setOctData(octData => ({
                            ...octData,
                            food: octData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setOctData(octData => ({
                            ...octData,
                            personal:octData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setOctData(octData => ({
                            ...octData,
                            investment: octData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setOctData(octData => ({
                            ...octData,
                            utilities: octData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 11){
                    if (dataType === 'Food'){
                        setNovData(novData => ({
                            ...novData,
                            food: novData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setNovData(novData => ({
                            ...novData,
                            personal: novData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setNovData(novData => ({
                            ...novData,
                            investment: novData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setNovData(novData => ({
                            ...novData,
                            utilities: novData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                else if (month === 12){
                    if (dataType === 'Food'){
                        setDecData(decData => ({
                            ...decData,
                            food: decData.food + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Personal'){
                        setDecData(decData => ({
                            ...decData,
                            personal: decData.personal + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Investment'){
                        setDecData(decData => ({
                            ...decData,
                            investment: decData.investment + parseInt(myData[key].amountSpent)
                        }));
                    } else if (dataType === 'Utilities'){
                        setDecData(decData => ({
                            ...decData,
                            utilities: decData.utilities + parseInt(myData[key].amountSpent)
                        }));
                    };
                }
                };
            }
        }

    useEffect(() => {
        getDataHandler()
    },[]);

    const data = [
        {
          "month": "Jan",
          "Food": janData.food,
          "FoodColor": "hsl(213, 70%, 50%)",
          "Personal": janData.personal,
          "PersonalColor": "hsl(359, 70%, 50%)",
          "Investment": janData.investment,
          "InvestmentColor": "hsl(73, 70%, 50%)",
          "Utilities": janData.utilities,
          "UtilitiesColor": "hsl(233, 70%, 50%)",
        },
        {
          "month": "Feb",
          "Food": febData.food,
          "FoodColor": "hsl(188, 70%, 50%)",
          "Personal": febData.personal,
          "PersonalColor": "hsl(179, 70%, 50%)",
          "Investment": janData.investment,
          "InvestmentColor": "hsl(2, 70%, 50%)",
          "Utilities": janData.utilities,
          "UtilitiesColor": "hsl(45, 70%, 50%)",

        },
        {
          "month": "Mar",
          "Food": marData.food,
          "FoodColor": "hsl(270, 70%, 50%)",
          "Personal": marData.personal,
          "PersonalColor": "hsl(107, 70%, 50%)",
          "Investment": marData.investment,
          "InvestmentColor": "hsl(145, 70%, 50%)",
          "Utilities": marData.utilities,
          "UtilitiesColor": "hsl(294, 70%, 50%)",

        },
        {
          "month": "Apr",
          "Food": aprData.food,
          "FoodColor": "hsl(284, 70%, 50%)",
          "Personal": aprData.personal,
          "PersonalColor": "hsl(134, 70%, 50%)",
          "Investment": aprData.investment,
          "InvestmentColor": "hsl(0, 70%, 50%)",
          "Utilities": aprData.utilities,
          "UtilitiesColor": "hsl(164, 70%, 50%)",
        },
        {
          "month": "May",
          "Food": mayData.food,
          "FoodColor": "hsl(146, 70%, 50%)",
          "Personal": mayData.personal,
          "PersonalColor": "hsl(103, 70%, 50%)",
          "Investment": mayData.investment,
          "InvestmentColor": "hsl(10, 70%, 50%)",
          "Utilities": mayData.utilities,
          "UtilitiesColor": "hsl(92, 70%, 50%)",
        },
        {
          "month": "Jun",
          "Food": juneData.food,
          "FoodColor": "hsl(260, 70%, 50%)",
          "Personal": juneData.personal,
          "PersonalColor": "hsl(247, 70%, 50%)",
          "Investment": juneData.investment,
          "InvestmentColor": "hsl(250, 70%, 50%)",
          "Utilities": juneData.utilities,
          "UtilitiesColor": "hsl(236, 70%, 50%)",
        },
        {
          "month": "Jul",
          "Food": julyData.food,
          "FoodColor": "hsl(249, 70%, 50%)",
          "Personal": julyData.personal,
          "PersonalColor": "hsl(114, 70%, 50%)",
          "Investment": julyData.investment,
          "InvestmentColor": "hsl(200, 70%, 50%)",
          "Utilities": julyData.utilities,
          "UtilitiesColor": "hsl(257, 70%, 50%)",
        },
        {
            "month": "Aug",
            "Food": augData.food,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": augData.personal,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": augData.investment,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": augData.utilities,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "month": "Sep",
            "Food": sepData.food,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": sepData.personal,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": sepData.investment,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": sepData.utilities,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "month": "Oct",
            "Food": octData.food,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": octData.personal,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": octData.investment,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": octData.utilities,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "month": "Nov",
            "Food": novData.food,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": novData.personal,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": novData.investment,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": novData.utilities,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "month": "Dec",
            "Food": decData.food,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": decData.personal,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": decData.investment,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": decData.utilities,
            "UtilitiesColor": "hsl(257, 70%, 50%)",

          }
      ]

    return (
    <ResponsiveBar
        data={data}
        theme={{"axis" :  {"ticks" : {"text" : {"fontSize" : props.fontSize}}}}}
        keys={[
            'Food',
            'Personal',
            'Investment',
            'Utilities'
        ]}
        indexBy="month"
        margin={{ top: 40, right: 110, bottom: 80, left: 50 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Investment'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in month: "+e.indexValue}}
    />)
}

export default MyResponsiveBar;