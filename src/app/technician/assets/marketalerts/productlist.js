"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
// import { CountryService } from './service/CountryService';

export default function MarketAlerts(probs) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const [countries, setCountries] = useState([
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D"Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People"S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People"S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const panelFooterTemplate = () => {
    const isCountrySelected = (filteredCountries || []).some( country => country['name'] === selectedCountry );
       return (
        <div className="py-2 px-3">
            {isCountrySelected ? (
                <span>
                    <b>{selectedCountry}</b> selected.
                </span>
            ) : (
                'No country selected.'
            )}
        </div>
    );
  };

  const search = (event) => {
      // Timeout to emulate a network connection
      setTimeout(() => {
          let _filteredCountries;

          if (!event.query.trim().length) {
              _filteredCountries = [...countries];
          }
          else {
              _filteredCountries = countries.filter((country) => {
                  return country.name.toLowerCase().startsWith(event.query.toLowerCase());
              });
          }

          setFilteredCountries(_filteredCountries);
      }, 250);
  }

  const itemTemplate = (item) => {
      return (
          <div className="flex align-items-center">
              <img
                  alt={item.name}
                  src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                  className={`flag flag-${item.code.toLowerCase()} mr-2`}
                  style={{width: '18px'}}
              />
              <div>{item.name}</div>
          </div>
      );
  };

  // useEffect(() => {
  //     CountryService.getCountries().then((data) => setCountries(data));
  // }, []);

  
  return (
    <>
      <div className="mt-[15px] lg:mt-[40px] xl:mt-[67px] 3xl:mt-[3.49vw]">
        <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto bg-white rounded-[16px] lg:rounded-[24px] 3xl:rounded-[1.25vw] px-[15px] lg:px-[56px] 3xl:px-[2.917vw] py-[15px] lg:py-[40px] 3xl:py-[2.083vw]">
          <div className="text-[#20232E] text-[18px] lg:text-[24px] 3xl:text-[1.25vw] font-medium text-center">
            Chose Product for Market Alert
          </div>
          <div className="flex justify-center productSearch gap-[16px] 3xl:gap-[0.833vw] mt-[15px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[24px] lg:mb-[48px] 3xl:mb-[2.5vw]">
            <div className="p-input-icon-left">
              <i className="asetsmng-search-big text-[20px] 3xl:text-[1.042vw] text-[#4B586E] z-[1]" />
              <i className="asetsmng-microphone text-[20px] 3xl:text-[1.042vw] text-[#4B586E] leading-none z-[1]" />
              {/* <InputText
              onChange={inputHandler}
                className="placeholder:text-[#84878D] placeholder:text-[16px] 3xl:placeholder:text-[0.833vw]"
                placeholder="Search products by name, brand, etc.,"
              /> */}
              <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
                completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} 
                className="placeholder:text-[#84878D] placeholder:text-[16px] 3xl:placeholder:text-[0.833vw] w-full"
                placeholder="Search products by name, brand, etc.,"
              />
             
            </div>
            <div className="col min-h-full">
              <Button type="submit" label="Search" onClick={()=>probs.setSearchShow(true)} />
            </div>
            <>
              
            </>
          </div>
          {/* row */}
          <div className="flex justify-between">
            <div className="text-[#20232E]">Popular Searches</div>
            <div className="text-[#4169E1]">
              <Link href={""}>See all Popular Products</Link>
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[15px] lg:gap-[32px] 3xl:gap-[1.667vw] mt-[16px] 3xl:mt-[0.833vw]">
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP 15s
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop2.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Dell Alienware x16
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop3.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Pavilion Plus
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Victus
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop2.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Asus Vivobook S 140
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop3.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Acer Predator Triton 17 X
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Envy x360 15
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
