import { ResponsivePie } from '@nivo/pie'
import { useState, useEffect } from 'react';

const MyPiechart = () => {
    const [investmentAmount, setInvestmentAmount] = useState<number>(0);
    const [utilitiesAmount, setUtilitiesAmount] = useState<number>(0);
    const [personalAmount, setPersonalAmount] = useState<number>(0);
    const [foodAmount, setFoodAmount] = useState<number>(0);
    const token: string|null = localStorage.getItem('token');
    const uid: string|null = localStorage.getItem('userId');

    async function getDataHandler () {
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
                if (myData[key].radioData === "Investment"){
                    setInvestmentAmount(prev => prev + parseInt(myData[key].amountSpent));                
                } else if (myData[key].radioData === "Food"){
                    
                    setFoodAmount(prev => prev + parseInt(myData[key].amountSpent)); 
                } else if (myData[key].radioData === "Utilities"){
                    
                    setUtilitiesAmount(prev => prev + parseInt(myData[key].amountSpent)); 
                }else if (myData[key].radioData === "Personal"){
                    
                    setPersonalAmount(prev => prev + parseInt(myData[key].amountSpent)); 
                }
                };
            }
        };

    useEffect(() => {
        getDataHandler();
    },[]);

    const data = [
        {
          "id": "Food",
          "label": "Food",
          "value": foodAmount,
          "color": "hsl(170, 70%, 50%)"
        },
        {
          "id": "Personal",
          "label": "Personal",
          "value": personalAmount,
          "color": "hsl(346, 70%, 50%)"
        },
        {
          "id": "Investment",
          "label": "Investment",
          "value": investmentAmount,
          "color": "hsl(277, 70%, 50%)"
        },
        {
          "id": "Utilities",
          "label": "Utilities",
          "value": utilitiesAmount,
          "color": "hsl(338, 70%, 50%)"
        }
      ]

    return(
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 20,
                translateY: 56,
                itemsSpacing: -10,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    );
};

export default MyPiechart;