'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import fabric from '@/assets/json/fabric.json';
import Image from 'next/image';
import ModelFront from '@/assets/images/model/model_front.png';
import Pants from '@/assets/images/pants/pants_front.png';
import { LuSearch } from 'react-icons/lu';
import { PiSlidersHorizontal } from 'react-icons/pi';

const common = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/buttons/10_fit_slim+bottom_cut_modern+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/buttons/10_necklines_classic+close_standard.png',
];

const White = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/995_fabric/front/necklines_classic+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/995_fabric/front/sleeves_long+sleeve_detail_normal+cuffs_classic.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/995_fabric/front/fit_slim+bottom_cut_modern+close_standard.png',
  ...common,
];

const ImperialRed = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/996_fabric/front/necklines_classic+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/996_fabric/front/sleeves_long+sleeve_detail_normal+cuffs_classic.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/996_fabric/front/fit_slim+bottom_cut_modern+close_standard.png',
  ...common,
];

const OnyxBlack = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/999_fabric/front/sleeves_long+sleeve_detail_normal+cuffs_classic.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/999_fabric/front/fit_slim+bottom_cut_modern+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/999_fabric/front/necklines_classic+close_standard.png',
  ...common,
];

const NavyBlue = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1744_fabric/front/necklines_classic+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1744_fabric/front/sleeves_long+sleeve_detail_normal+cuffs_classic.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1744_fabric/front/fit_slim+bottom_cut_modern+close_standard.png',
  ...common,
];
const CoralRed = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1275_fabric/front/necklines_classic+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1275_fabric/front/fit_slim+bottom_cut_modern+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1275_fabric/front/sleeves_long+sleeve_detail_normal+cuffs_classic.png',
  ...common
]

const floral = [
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1741_fabric/front/necklines_classic+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1741_fabric/front/fit_slim+bottom_cut_modern+close_standard.png',
  'https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/1741_fabric/front/sleeves_long+sleeve_detail_normal+cuffs_classic.png'
]

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFabric, setSelectedFabric] = useState<string>('White');
  const [fabricList] = useState(fabric);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [selectedFabric]);

  return (
    <section className='grid grid-cols-12 gap-3 px-10 py-10 h-svh overflow-hidden'>
      {/* {loading && (
        <div className='bg-black/80 fixed w-full h-full z-20 top-0 left-0 flex justify-center items-center flex-col'>
          <LuCircleDotDashed className='text-5xl text-white animate-spin duration-100' />
          <p className='text-sm text-white'>Please wait...</p>
        </div>
      )} */}
      <div className='col-span-4'>
        <div className='grid grid-cols-12 gap-3 items-center mb-5'>
          <div className='col-span-8 border rounded-lg flex items-center px-3'>
            <span className='flex items-center justify-center'>
              <LuSearch className='text-zinc-400' />
            </span>
            <input
              type='text'
              placeholder='Search for fabrics by name'
              className='w-full px-2 h-10 bg-transparent outline-none border-none font-light'
            />
          </div>
          <div className='col-span-3'>
            <button className='h-10 border rounded-lg w-full flex items-center justify-center gap-3 font-light hover:bg-zinc-700 hover:text-white duration-200'>
              <PiSlidersHorizontal />
              Filter
            </button>
          </div>
          <p className='col-span-1 font-extralight'>4/4</p>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          {fabricList.map((item, index) => (
            <button
              key={index}
              className='cursor-pointer'
              onClick={() => {
                setSelectedFabric(item.color);
                setLoading(true);
              }}
            >
              <Image
                src={item.img}
                alt={item.color}
                width={100}
                height={100}
                className='w-full h-24 rounded-lg cursor-pointer object-cover'
              />
              <div className='w-full flex items-center justify-between text-gray-700 mt-1'>
                <p className='text-sm font-semibold'>{item.color}</p>
                <p className='text-sm font-normal'>৳{item.price}</p>
              </div>
              <p className='m-0 text-xs text-left text-gray-500'>
                {item?.type}
                {item?.material?.length > 0 && ' • '}
                {item?.material?.join(', ')}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className='col-span-6'>
        <div className='flex justify-center relative -mt-40'>
          <Image
            src={ModelFront}
            alt='Model Front'
            width={420}
            height={200}
            className='h-full'
          />
          <Image
            src={Pants}
            alt='Pants'
            width={420}
            height={200}
            className='absolute h-full'
          />
          {selectedFabric &&
            selectedFabric === 'White' &&
            White.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt='item'
                width={420}
                height={200}
                className='absolute h-full'
              />
            ))}
          {selectedFabric &&
            selectedFabric === 'Imperial Red' &&
            ImperialRed.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt='item'
                width={420}
                height={200}
                className='absolute h-full'
              />
            ))}

          {selectedFabric &&
            selectedFabric === 'Onyx Black' &&
            OnyxBlack.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt='item'
                width={420}
                height={200}
                className='absolute h-full'
              />
            ))}
          {selectedFabric &&
            selectedFabric === 'Navy Blue' &&
            NavyBlue.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt='item'
                width={420}
                height={200}
                className='absolute h-full'
              />
            ))}
          {selectedFabric &&
            selectedFabric === 'Coral Red' &&
            CoralRed.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt='item'
                width={420}
                height={200}
                className='absolute h-full'
              />
            ))}
          {selectedFabric &&
            selectedFabric === 'Floral' &&
            floral.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt='item'
                width={420}
                height={200}
                className='absolute h-full'
              />
            ))}
        </div>
      </div>
      <div className='col-span-2'>
        <p className='text-3xl font-medium'>
          Custom <span>Blouses</span>
        </p>
        <h1 className='text-2xl text-zinc-600'>
          <span>৳{fabricList[0].price}</span>
        </h1>
        <p className='text-sm text-zinc-600'>VAT Inc.</p>
        <button className='bg-pink-600 text-white px-10 py-2 rounded-full text-xl mt-5'>
          Next
        </button>
      </div>
    </section>
  );
};

export default Home;
