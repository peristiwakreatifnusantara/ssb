'use client';

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import ImageWrapper from '../Common/ImageWrapper';

const Section = styled.section`
  padding: 6rem 2rem;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ServiceItem = styled.div`
  border-bottom: 1px solid #333;
  padding: 2rem 0;
  cursor: pointer;
  position: relative;
  
  &:first-child {
    border-top: 1px solid #333;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    font-size: 2rem;
    color: var(--white);
    transition: color 0.3s ease;
  }
  
  span {
    color: var(--green);
    font-size: 2rem;
  }
  
  &:hover h3 {
    color: var(--green);
  }
`;

const ItemContent = styled.div`
  height: 0;
  overflow: hidden;
  
  .content-inner {
    padding-top: 2rem;
    display: flex;
    gap: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  p {
    flex: 1;
    color: var(--link-color);
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
  }
`;

const services = [
  {
    title: 'Jasa Persewaan Kendaraan Angkutan',
    desc: 'Solusi transportasi andal untuk kebutuhan logistik dan mobilitas perusahaan Anda dengan armada yang terawat.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Pengelola Gedung',
    desc: 'Layanan manajemen gedung profesional untuk memastkan operasional properti Anda berjalan efisien dan optimal.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Pelayanan Kebersihan',
    desc: 'Layanan kebersihan menyeluruh untuk lingkungan kerja yang sehat, higienis, dan nyaman bagi produktivitas.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Renovasi Gedung Dan Kantor',
    desc: 'Transformasi ruang kerja Anda dengan layanan renovasi yang mengutamakan fungsi, estetika, dan kualitas.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Konstruksi',
    desc: 'Pengerjaan konstruksi kokoh dan presisi, ditangani oleh tenaga ahli berpengalaman di bidang sipil.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Pengamanan Gedung',
    desc: 'Sistem keamanan terpadu dan personel terlatih untuk melindungi aset serta memastikan keamanan lingkungan gedung.',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Beli, Renovasi & Jual Properti',
    desc: 'Layanan end-to-end untuk investasi properti, mulai dari akuisisi, peningkatan nilai melalui renovasi, hingga penjualan.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Pengelola Limbah Elektronik & Equipment',
    desc: 'Penanganan limbah elektronik yang ramah lingkungan dan sesuai regulasi untuk masa depan yang lebih berkelanjutan.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Jasa Alih Daya SDM',
    desc: 'Penyediaan tenaga kerja profesional dan terlatih untuk berbagai posisi operasional dan administratif, mendukung efisiensi bisnis Anda.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
  }
];

const ServiceList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (el) {
        if (i === openIndex) {
          gsap.to(el, { height: 'auto', duration: 0.5, ease: 'power2.out' });
        } else {
          gsap.to(el, { height: 0, duration: 0.5, ease: 'power2.in' });
        }
      }
    });
  }, [openIndex]);

  return (
    <Section>
      <Container>
        {services.map((s, i) => (
          <ServiceItem key={i} onClick={() => setOpenIndex(prev => prev === i ? null : i)}>
            <ItemHeader>
              <h3>{s.title}</h3>
              <span>{openIndex === i ? '-' : '+'}</span>
            </ItemHeader>
            <ItemContent ref={el => contentRefs.current[i] = el}>
              <div className="content-inner">
                <ImageContainer>
                  <ImageWrapper
                    src={s.img}
                    alt={s.title}
                    width={400}
                    height={300}
                    widthCSS="100%"
                    heightCSS="100%"
                    style={{ objectFit: 'cover' }}
                  />
                </ImageContainer>
                <p>{s.desc}</p>
              </div>
            </ItemContent>
          </ServiceItem>
        ))}
      </Container>
    </Section>
  );
};

export default ServiceList;
