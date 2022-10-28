import React from 'react';

const NavigationDots = ({active}) => {
    return (
        <div className='video__navigation'>
            {['home','work','skills','contact'].map((item, index)=> (
                <a
                    key={item + index}
                    href={`#${item}`}
                    className='video__navigation-dot'
                    style={active === item ? {backgroundColor: '#313BAC'} : {}}
                />
            ))}
        </div>
    );
};

export default NavigationDots;