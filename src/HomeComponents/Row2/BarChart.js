import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'

const MyResponsiveBar = () => {

    const [janData, setJanData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [febData, setFebData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [marData, setMarData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [aprData, setAprData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [mayData, setMayData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [juneData, setJuneData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [julyData, setJulyData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [augData, setAugData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [sepData, setSepData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [octData, setOctData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [novData, setNovData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });
    const [decData, setDecData] = useState({
        food: 0,
        personal: 0,
        investment: 0,
        utilities: 0,
    });

    async function getDataHandler(){
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json');
        const myData = await response.json();
        for (const key in myData){
            const date = new Date(myData[key].date)
            const month = date.getMonth() + 1
            const dataType = myData[key].radioData
            if (month == 1){
                if (dataType == 'Food'){
                    setJanData(janData => ({
                        ...janData,
                        food: parseInt(janData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setJanData(janData => ({
                        ...janData,
                        personal: parseInt(janData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setJanData(janData => ({
                        ...janData,
                        investment: parseInt(janData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setJanData(janData => ({
                        ...janData,
                        utilities: parseInt(janData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            } 
            else if (month == 2){
                if (dataType == 'Food'){
                    setFebData(febData => ({
                        ...febData,
                        food: parseInt(febData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setFebData(febData => ({
                        ...febData,
                        personal: parseInt(febData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setFebData(febData => ({
                        ...febData,
                        investment: parseInt(febData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setFebData(febData => ({
                        ...febData,
                        utilities: parseInt(febData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 3){
                if (dataType == 'Food'){
                    setMarData(marData => ({
                        ...marData,
                        food: parseInt(marData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setMarData(marData => ({
                        ...marData,
                        personal: parseInt(marData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setMarData(marData => ({
                        ...marData,
                        investment: parseInt(marData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setMarData(marData => ({
                        ...marData,
                        utilities: parseInt(marData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 4){
                if (dataType == 'Food'){
                    setAprData(aprData => ({
                        ...aprData,
                        food: parseInt(aprData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setAprData(aprData => ({
                        ...aprData,
                        personal: parseInt(aprData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setAprData(aprData => ({
                        ...aprData,
                        investment: parseInt(aprData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setAprData(aprData => ({
                        ...aprData,
                        utilities: parseInt(aprData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 5){
                if (dataType == 'Food'){
                    setMayData(mayData => ({
                        ...mayData,
                        food: parseInt(mayData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setMayData(mayData => ({
                        ...mayData,
                        personal: parseInt(mayData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setMayData(mayData => ({
                        ...mayData,
                        investment: parseInt(mayData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setMayData(mayData => ({
                        ...mayData,
                        utilities: parseInt(mayData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 6){
                if (dataType == 'Food'){
                    setJuneData(juneData => ({
                        ...juneData,
                        food: parseInt(juneData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setJuneData(juneData => ({
                        ...juneData,
                        personal: parseInt(juneData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setJuneData(juneData => ({
                        ...juneData,
                        investment: parseInt(juneData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setJuneData(juneData => ({
                        ...juneData,
                        utilities: parseInt(juneData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 7){
                if (dataType == 'Food'){
                    setJulyData(julyData => ({
                        ...julyData,
                        food: parseInt(julyData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setJulyData(julyData => ({
                        ...julyData,
                        personal: parseInt(julyData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setJulyData(julyData => ({
                        ...julyData,
                        investment: parseInt(julyData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setJulyData(julyData => ({
                        ...julyData,
                        utilities: parseInt(julyData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 8){
                if (dataType == 'Food'){
                    setAugData(augData => ({
                        ...augData,
                        food: parseInt(augData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setAugData(augData => ({
                        ...augData,
                        personal: parseInt(augData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setAugData(augData => ({
                        ...augData,
                        investment: parseInt(augData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setAugData(augData => ({
                        ...augData,
                        utilities: parseInt(augData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 9){
                if (dataType == 'Food'){
                    setSepData(sepData => ({
                        ...sepData,
                        food: parseInt(sepData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setSepData(sepData => ({
                        ...sepData,
                        personal: parseInt(sepData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setSepData(sepData => ({
                        ...sepData,
                        investment: parseInt(sepData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setSepData(sepData => ({
                        ...sepData,
                        utilities: parseInt(sepData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 10){
                if (dataType == 'Food'){
                    setOctData(octData => ({
                        ...octData,
                        food: parseInt(octData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setOctData(octData => ({
                        ...octData,
                        personal: parseInt(octData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setOctData(octData => ({
                        ...octData,
                        investment: parseInt(octData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setOctData(octData => ({
                        ...octData,
                        utilities: parseInt(octData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 11){
                if (dataType == 'Food'){
                    setNovData(novData => ({
                        ...novData,
                        food: parseInt(novData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setNovData(novData => ({
                        ...novData,
                        personal: parseInt(novData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setNovData(novData => ({
                        ...novData,
                        investment: parseInt(novData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setNovData(novData => ({
                        ...novData,
                        utilities: parseInt(novData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            else if (month == 12){
                if (dataType == 'Food'){
                    setDecData(decData => ({
                        ...decData,
                        food: parseInt(decData.food) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Personal'){
                    setDecData(decData => ({
                        ...decData,
                        personal: parseInt(decData.personal) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Investment'){
                    setDecData(decData => ({
                        ...decData,
                        investment: parseInt(decData.investment) + parseInt(myData[key].amountSpent)
                    }));
                } else if (dataType == 'Utilities'){
                    setDecData(decData => ({
                        ...decData,
                        utilities: parseInt(decData.utilities) + parseInt(myData[key].amountSpent)
                    }));
                };
            }
            };
        }

    useEffect(() => {
        getDataHandler()
    },[]);

    const data = [
        {
          "country": "January",
          "Food": janData.food/2,
          "FoodColor": "hsl(213, 70%, 50%)",
          "Personal": janData.personal/2,
          "PersonalColor": "hsl(359, 70%, 50%)",
          "Investment": janData.investment/2,
          "InvestmentColor": "hsl(73, 70%, 50%)",
          "Utilities": janData.utilities/2,
          "UtilitiesColor": "hsl(233, 70%, 50%)",
        },
        {
          "country": "February",
          "Food": febData.food/2,
          "FoodColor": "hsl(188, 70%, 50%)",
          "Personal": febData.personal/2,
          "PersonalColor": "hsl(179, 70%, 50%)",
          "Investment": janData.investment/2,
          "InvestmentColor": "hsl(2, 70%, 50%)",
          "Utilities": janData.utilities/2,
          "UtilitiesColor": "hsl(45, 70%, 50%)",

        },
        {
          "country": "March",
          "Food": marData.food/2,
          "FoodColor": "hsl(270, 70%, 50%)",
          "Personal": marData.personal/2,
          "PersonalColor": "hsl(107, 70%, 50%)",
          "Investment": marData.investment/2,
          "InvestmentColor": "hsl(145, 70%, 50%)",
          "Utilities": marData.utilities/2,
          "UtilitiesColor": "hsl(294, 70%, 50%)",

        },
        {
          "country": "April",
          "Food": aprData.food/2,
          "FoodColor": "hsl(284, 70%, 50%)",
          "Personal": aprData.personal/2,
          "PersonalColor": "hsl(134, 70%, 50%)",
          "Investment": aprData.investment/2,
          "InvestmentColor": "hsl(0, 70%, 50%)",
          "Utilities": aprData.utilities/2,
          "UtilitiesColor": "hsl(164, 70%, 50%)",
        },
        {
          "country": "May",
          "Food": mayData.food/2,
          "FoodColor": "hsl(146, 70%, 50%)",
          "Personal": mayData.personal/2,
          "PersonalColor": "hsl(103, 70%, 50%)",
          "Investment": mayData.investment/2,
          "InvestmentColor": "hsl(10, 70%, 50%)",
          "Utilities": mayData.utilities/2,
          "UtilitiesColor": "hsl(92, 70%, 50%)",
        },
        {
          "country": "June",
          "Food": juneData.food/2,
          "FoodColor": "hsl(260, 70%, 50%)",
          "Personal": juneData.personal/2,
          "PersonalColor": "hsl(247, 70%, 50%)",
          "Investment": juneData.investment/2,
          "InvestmentColor": "hsl(250, 70%, 50%)",
          "Utilities": juneData.utilities/2,
          "UtilitiesColor": "hsl(236, 70%, 50%)",
        },
        {
          "country": "July",
          "Food": julyData.food/2,
          "FoodColor": "hsl(249, 70%, 50%)",
          "Personal": julyData.personal/2,
          "PersonalColor": "hsl(114, 70%, 50%)",
          "Investment": julyData.investment/2,
          "InvestmentColor": "hsl(200, 70%, 50%)",
          "Utilities": julyData.utilities/2,
          "UtilitiesColor": "hsl(257, 70%, 50%)",
        },
        {
            "country": "August",
            "Food": augData.food/2,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": augData.personal/2,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": augData.investment/2,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": augData.utilities/2,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "country": "September",
            "Food": sepData.food/2,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": sepData.personal/2,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": sepData.investment/2,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": sepData.utilities/2,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "country": "October",
            "Food": octData.food/2,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": octData.personal/2,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": octData.investment/2,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": octData.utilities/2,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "country": "November",
            "Food": novData.food/2,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": novData.personal/2,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": novData.investment/2,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": novData.utilities/2,
            "UtilitiesColor": "hsl(257, 70%, 50%)",
          },
          {
            "country": "December",
            "Food": decData.food/2,
            "FoodColor": "hsl(249, 70%, 50%)",
            "Personal": decData.personal/2,
            "PersonalColor": "hsl(114, 70%, 50%)",
            "Investment": decData.investment/2,
            "InvestmentColor": "hsl(200, 70%, 50%)",
            "Utilities": decData.utilities/2,
            "UtilitiesColor": "hsl(257, 70%, 50%)",

          }
      ]

    return (
    <ResponsiveBar
        data={data}
        keys={[
            'Food',
            'Personal',
            'Investment',
            'Utilities'
        ]}
        indexBy="country"
        margin={{ top: 40, right: 100, bottom: 80, left: 50 }}
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
            legend: 'country',
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
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />)
}

export default MyResponsiveBar;