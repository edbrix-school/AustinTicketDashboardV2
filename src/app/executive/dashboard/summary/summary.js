import React from 'react'

export default function Summary() {

  const cardData = [
    {
      id: 1,
      title: 'Total Number of Tickets',
      count: '1000',
      bylastperioddata: '2%'
    },
    {
      id: 2,
      title: 'Tickets Unopened',
      count: '80',
      bylastperioddata: '2%'
    },
    {
      id: 3,
      title: 'Tickets in Progress',
      count: '560',
      bylastperioddata: '2%'
    },
    {
      id: 4,
      title: 'Tickets Resolved',
      count: '120',
      bylastperioddata: '2%'
    },
    {
      id: 5,
      title: 'Avg Feedback Rating ',
      count: '3.5',
      bylastperioddata: '2%'
    },
  ]

  return (
    <div className='mt-[16px] 3xl:mt-[0.833vw]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[20px] 3xl:gap-[1.042vw]'>
        {cardData.map((elm) => {
          return (
            <div key={elm.id} className='border border-[#E4E7EC] rounded-lg tileShow bg-[#FFFFFF]'>
              <div className='px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw]'>
                <div className='text-[#20232E] text-[16px] 3xl:text-[0.833vw] font-normal'>
                  {elm.title}
                </div>
              </div>
              <div className='px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw]'>
                <div className='flex justify-between gap-1'>
                  <div className='text-[#3A3E49] text-[36px] 3xl:text-[1.875vw] font-medium'>{elm.count}</div>
                  <div className='text-end'>
                    <div className='text-[#20232E] text-[16px] 3xl:text-[0.833vw] font-medium'>{elm.bylastperioddata}  <i className='asetsmng-arrow-up-circle-fill text-[16px] 3xl:text-[0.833vw] text-[#057A55]'></i></div>
                    <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] font-normal'>by last period</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
