import { useState } from 'react';

import { Globe, Mail, MapPin, Phone, RotateCw } from 'lucide-react';

import styles from './DigitalBusinessCard.module.css';

type DigitalBusinessCardProps = {
  /** Profile image URL */
  avatar: string;
  /** Person's name */
  name: string;
  /** Job title */
  title: string;
  /** Organization name */
  org: string;
  /** Contact email */
  email: string;
  /** Contact phone number */
  phone: string;
  /** Website URL or domain */
  website: string;
  /** City or office location */
  location: string;
  /** URL of the QR code image */
  qrCodeUrl: string;
  /** Allow tapping the card to flip to a large QR code */
  flippable?: boolean;
};

/** Dark contact card with a QR code and an optional flip to enlarge it. */
export default function DigitalBusinessCard({
  avatar,
  name,
  title,
  org,
  email,
  phone,
  website,
  location,
  qrCodeUrl,
  flippable = false,
}: DigitalBusinessCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.scene}>
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
        <div className={`${styles.face} ${styles.front}`}>
          <div className={styles.top}>
            <div className={styles.person}>
              <img className={styles.avatar} src={avatar} alt={name} />
              <div>
                <p className={styles.name}>{name}</p>
                <div className={styles.title}>{title}</div>
                <div className={styles.org}>{org}</div>
              </div>
            </div>
            <div className={styles.qrSmall}>
              <img src={qrCodeUrl} alt={`QR code for ${name}`} />
            </div>
          </div>

          <div className={styles.contacts}>
            <span className={styles.row}>
              <Mail size={14} aria-hidden="true" />
              <span className={styles.rowText}>{email}</span>
            </span>
            <span className={styles.row}>
              <Phone size={14} aria-hidden="true" />
              <span className={styles.rowText}>{phone}</span>
            </span>
            <span className={styles.row}>
              <Globe size={14} aria-hidden="true" />
              <span className={styles.rowText}>{website}</span>
            </span>
            <span className={styles.row}>
              <MapPin size={14} aria-hidden="true" />
              <span className={styles.rowText}>{location}</span>
            </span>
          </div>

          {flippable && (
            <button
              type="button"
              className={styles.hint}
              onClick={() => setFlipped(true)}
            >
              <RotateCw size={12} aria-hidden="true" />
              Tap to flip
            </button>
          )}
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.qrLarge}>
            <img src={qrCodeUrl} alt={`QR code for ${name}`} />
          </div>
          <p className={styles.name}>{name}</p>
          <div className={styles.org}>{org}</div>
          {flippable && (
            <button
              type="button"
              className={styles.hint}
              onClick={() => setFlipped(false)}
            >
              <RotateCw size={12} aria-hidden="true" />
              Tap to flip back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
