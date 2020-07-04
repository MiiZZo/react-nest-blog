import React from 'react';
import { 
    Tag, 
    Avatar,
    Tooltip,
    Typography,
    Button 
} from 'antd';
import { 
    LikeOutlined, 
    DislikeOutlined, 
    CommentOutlined, 
    EyeOutlined,
    BookOutlined
} from '@ant-design/icons';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';
import { cn } from '@bem-react/classname';
import { Article as IArticle } from '@common/types';
import InformationBlock from './InfromationBlock';
import Comments from './Comments';
import './Article.scss';

const cnArticle = cn('Article');
const { Title, Text, Link } = Typography;

export default function Article(props: IArticle): JSX.Element {
    const {
        title,
        content,
        publicationDate,
        comments,
        rating,
        tags,
        viewsNumber,
        author,
        hub
    } = props;

    let Hub = null;
    if (hub) {
        const { name, rating } = hub;
        Hub = (
            <div className={cnArticle('Hub')}>
                <div>
                    <div className={cnArticle('HubAvatarAndRating')}>
                        <div>
                            <Avatar>{ name[0] }</Avatar>
                        </div>
                        <div className={cnArticle('HubRatingWrapper')}>
                            <Text>{ rating }</Text>
                            <br/>
                            <Text>Рейтинг</Text>
                        </div>
                    </div>
                    <div className={cnArticle('HubInfo')}>
                        <Title level={4} className={cnArticle('HubName')}>{ name }</Title>
                        <Text className={cnArticle('HubText')}>Хаб</Text>
                    </div>
                </div>
                <div className={cnArticle('HubSubscribeButtonWrapper')}>
                    <Tooltip title='Подписаться на хаб' placement='bottom'>
                        <Button type='dashed'>Подписаться</Button>
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <div className={cnArticle()}>
            <div className={cnArticle('Container')}>
                <div>{ Hub }</div>
                <div className={cnArticle('Wrapper')}>
                    <div>
                        <div className={cnArticle('UserAndPublishingDateWrapper')}>
                            <Avatar style={{ backgroundColor: '#1890FF' }}>
                                { author.fullName ? author.fullName[0] : author.nickname[0] }
                            </Avatar>
                            <Link href='/'>{author.fullName || author.nickname}</Link>
                            <Text>{moment(publicationDate).format('YY-MM-DD HH:mm')}</Text>
                        </div>
                        <Title className={cnArticle('Title')}>{title}</Title>
                        <div className={cnArticle('TagsWrapper')}>
                            { tags.map((tag) => (
                                <Tag key={tag} color="gold">{tag}</Tag>
                            )) }
                        </div>
                        <div className={cnArticle('Content')}>
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                        <div className={cnArticle('Footer')}>
                            <div className={cnArticle('Statistics')}>
                                <div className={cnArticle('RatingWrapper')}>
                                    <Tooltip title='Нравиться'>
                                        <LikeOutlined/>
                                    </Tooltip>
                                    <Text>
                                        {rating}
                                    </Text>
                                    <Tooltip title='Не нравиться'>
                                        <DislikeOutlined/>
                                    </Tooltip>
                                </div>
                                <div className={cnArticle('Statistic')}>
                                    <Tooltip title='Количество комментариев'>
                                        <CommentOutlined size={50}/>
                                    </Tooltip>
                                    { comments?.length } 
                                </div>
                                <div className={cnArticle('Statistic')}>
                                    <Tooltip title='Количество просмотров'>
                                        <EyeOutlined />
                                    </Tooltip>
                                    { viewsNumber }
                                </div>
                                <Tooltip title='Добавить в закладки'>
                                    <BookOutlined />
                                </Tooltip>
                            </div>
                            <div className={cnArticle('FooterAuthorInfo')}>
                                <div className={cnArticle('FooterInfo')}>
                                    <Avatar>{ author.nickname[0] }</Avatar>
                                    <RouterLink 
                                        className={cnArticle('FooterInfoName')} 
                                        to={`/users/${author.nickname}`}
                                    >
                                        {author.fullName}
                                    </RouterLink>
                                    <Button className={cnArticle('FooterSubscribeButton')}>Подписаться</Button>
                                </div>
                                <div className={cnArticle('FooterInfo')}>
                                    <Avatar>{ hub?.name[0] }</Avatar>
                                    <RouterLink 
                                        className={cnArticle('FooterInfoName')} 
                                        to={`/hubs/${hub?.name}`}
                                    >
                                        { hub?.name }
                                    </RouterLink>
                                    <Button className={cnArticle('FooterSubscribeButton')}>Подписаться</Button>
                                </div>
                            </div>
                        </div>
                        <Title level={3}>Коментарии - {comments?.length}</Title>
                        <div>
                            <Comments comments={comments} />
                        </div>
                    </div>
                    { hub && hub.links.length > 0 ? 
                        <div className={cnArticle('InformationBlockWrapper')}>
                            <InformationBlock 
                                hub={{
                                    type: 'Hub',
                                    links: hub.links,
                                    membersCount: hub.members.length,
                                    name: hub.name,
                                    publicationsCount: hub.publications.length,
                                    rating: hub.rating,
                                    subscribersСount: hub.subscribers.length
                                }}
                                author={{
                                    membersCount: 0,
                                    type: 'Author',
                                    links: author.links,
                                    name: author.nickname,
                                    publicationsCount: author.publications.length,
                                    rating: author.rating,
                                    subscribersСount: author.subscriptions.length
                                
                                }}
                            />
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
