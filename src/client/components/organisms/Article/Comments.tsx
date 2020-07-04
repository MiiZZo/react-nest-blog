import React from 'react';
import { Comment, Avatar, Typography, Tooltip } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Comment as IComment } from '@common/types';

interface Props {
    comments: IComment[]
}

const { Link, Text } = Typography;

export default function Comments({ comments }: Props): JSX.Element {

    return (
        <>
            {comments?.map((comment) => {
                const { author, creationDate, rating, text } = comment;
                const { fullName, nickname } = author;
                let ratingTextType: 'danger' | undefined = undefined;
                if (rating < 0) {
                    ratingTextType= 'danger'
                }
                return (
                    <Comment
                        key={creationDate.getDate()}
                        author={<Link>{ fullName ? fullName : nickname }</Link>}
                        avatar={
                            <Avatar style={{ backgroundColor: '#1890FF' }} size={32}>
                                { fullName ? fullName[0] : nickname[0].toUpperCase() }
                            </Avatar>
                        }
                        content={
                            <Text>
                                { text }
                            </Text>
                        }
                        actions={[
                            <Tooltip title='Нравиться' key={1}>
                                <LikeOutlined />
                            </Tooltip>, 
                            <Text key={2} style={{ color: rating > 0 ? 'green' : undefined }} type={ratingTextType}>
                                { rating > 0 ?  `+${rating}` : rating }
                            </Text>, 
                            <Tooltip title='Не нравиться' key={3}>
                                <DislikeOutlined/>
                            </Tooltip>
                        ]}
                        datetime={
                            <Tooltip title={moment(creationDate).format('YYYY-MM-DD HH:mm')}>
                                <span>{moment(creationDate).format('YY-MM-DD HH:mm')}</span>
                            </Tooltip>
                        }
                    />
                )
            })}
        </>
    )
} 
