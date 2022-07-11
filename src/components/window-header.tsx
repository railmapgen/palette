import React from 'react';
import { Badge, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Environments, getEnvironment, getVersion } from '../util/config';
import { RmgWindowHeader } from '@railmapgen/rmg-components';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';
import { LanguageCode } from '@railmapgen/rmg-palette-resources';
import { MdTranslate } from 'react-icons/md';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = getEnvironment();
    const getBadgeColour = (env: Environments) => {
        switch (env) {
            case Environments.DEV:
                return 'red';
            case Environments.UAT:
                return 'orange';
            case Environments.PRD:
                return 'green';
        }
    };

    const handleChangeLanguage = async (language: LanguageCode) => {
        const t = await i18n.changeLanguage(language);
        document.documentElement.lang = language;
        document.title = t('RMG Palette');
    };

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md" mr="auto">
                {t('RMG Palette')}
                <Badge ml={1} colorScheme={getBadgeColour(environment)}>
                    {environment === Environments.PRD ? getVersion() : environment}
                </Badge>
            </Heading>

            <HStack ml="auto">
                <Menu>
                    <MenuButton as={IconButton} icon={<MdTranslate />} variant="ghost" size="sm" />
                    <MenuList>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.English)}>English</MenuItem>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.ChineseSimp)}>简体中文</MenuItem>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.ChineseTrad)}>繁體中文</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </RmgWindowHeader>
    );
}
