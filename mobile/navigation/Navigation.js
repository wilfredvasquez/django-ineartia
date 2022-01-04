import React from 'react';
import NavigationUserAnonymous from './NavigationUserAnonymous';
import NavigationUserLogged from './NavigationUserLogged';
import useInertia from '../hooks/useInertia';

export default function Navigation() {
    const { iProps } = useInertia();

    if(iProps?.auth.user.username) return <NavigationUserLogged />

    return <NavigationUserAnonymous />
}
