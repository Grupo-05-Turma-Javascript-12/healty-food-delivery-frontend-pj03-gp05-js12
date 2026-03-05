import React from 'react';

function HomeProducts() {
  const features = [
    {
      id: '01.',
      title: 'Comida de verdade, feita para o seu dia a dia',
      img: '/photos/01.png', 
    },
    {
      id: '02.',
      title: 'Diversidade de sabores, um só lugar',
      img: '/photos/02.png', 
    },
    {
      id: '03.',
      title: 'Pronto para comer, pronto para cuidar de você',
      img: '/photos/03.png',
    },
    {
      id: '04.',
      title: 'Menos tempo na cozinha. Mais tempo para viver.',
      img: '/photos/04.png', 
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col space-y-6">
              
              
              <div className="w-24 h-24 overflow-hidden rounded-md shadow-sm">
                <img 
                  src={item.img} 
                  alt={`Diferencial ${item.id}`} 
                  className="w-full h-full object-cover"
                />
              </div>

              
              <div className="space-y-2">
                <span className="text-3xl font-extrabold text-gray-900 block">
                  {item.id}
                </span>
                <p className="text-gray-700 text-lg md:text-xl leading-tight font-medium max-w-[220px]">
                  {item.title}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;