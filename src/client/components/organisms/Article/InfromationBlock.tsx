import React from 'react';
import moment from 'moment';
import { Typography } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@bem-react/classname';

interface InformationObject {
    name: string
    rating: number
    publicationsCount: number
    subscribersСount: number
    membersCount: number
    links: string[]
}

type HubInfo = InformationObject & { type: 'Hub' }
type AuthorInfo = InformationObject & { type: 'Author' }

interface Props {
    hub: HubInfo,
    author: AuthorInfo
}

const { Link, Title, Text } = Typography;
const cnArticle = cn('Article');


export default function InformationBlock(props: Props): JSX.Element {
    const {
        hub,
        author
    } = props;

    return (
        <>
            { [hub, author].map(infoObj => {
                let route = '';

                if (infoObj.type === 'Hub') {
                    route = `/hubs/${infoObj.name}`
                } else {
                    route = `/users/${infoObj.name}`
                }
                return (
                    <>
                        <div className={cnArticle('InformationBlock')}>
                        <Title level={4}>
                            <RouterLink 
                                className={cnArticle('InformationTitle')} 
                                to={route}
                            >
                                { infoObj.name }
                            </RouterLink>
                        </Title>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Рейтинг</td>
                                    <td className={cnArticle('InformationValue')}>{ infoObj.rating }</td>
                                </tr>
                                <tr>
                                    <td>Количество подписчиков</td>
                                    <td className={cnArticle('InformationValue')}>{ infoObj.subscribersСount }</td>
                                </tr>
                                <tr>
                                    <td>Количество публикаций</td>
                                    <td className={cnArticle('InformationValue')}>{ infoObj.publicationsCount }</td>
                                </tr>
                                <tr>
                                    <td>Количество участников</td>
                                    <td className={cnArticle('InformationValue')}>{ infoObj.membersCount }</td>
                                </tr>
                            </tbody>
                        </table>
                        { infoObj.links.length > 0 ? 
                            <div>
                                <Text strong>Ссылки</Text>
                                <br/>
                                {hub.links.map((link: string) => (
                                    <>
                                        <Link href={link} key={link}>{link.replace('https://', '')}</Link>
                                        <br/>
                                    </>
                                ))}
                            </div>
                            :
                            null
                        }
                    </div>
                    </>
                )  
            })
            }
        </>
    )
}
