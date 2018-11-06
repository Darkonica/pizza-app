import styled from 'styled-components';

const Styles = styled.div`
    footer {
        color: #fff;
        background-color: #373535;

        a {
            color: #fff;
            opacity: 0.7;
            text-decoration: none;

            &:hover {
                opacity: 1;
            }
        }

        .upper-part {
            display: flex;
            justify-content: space-between;
            padding: 30px 0;

            .menu-cont {
                display: flex;

                .menu-block {
                    margin-left: 50px;

                    &:first-of-type {
                        margin-left: 0;
                    }

                    .title {
                        font-weight: bold;
                        letter-spacing: 0.2px;
                        margin-bottom: 5px;
                    }
                    ul {
                        padding: 0;
                        margin: 0;
                        list-style: none;
    
                        li {
                            line-height: 1.8;
                        }
                    }
                }
            }
            
            .contacts {
                text-align: right;

                .phone {
                    font-size: 26px;
                    letter-spacing: 0.4px;
                }
                .desc {
                    font-size: 14px;
                    color: #888;
                }
                .email {
                    margin-top: 10px;
                }
            }
            
        }
        .lower-part {
            display: flex;
            justify-content: space-between;
            padding: 30px 0;
            border-top: 1px solid #4e4b4b;

            ul {
                display: inline-block;
                padding: 0;
                margin: 0;

                li {
                    display: inline-block;
                    margin-left: 1.5em;
                    line-height: 26px;

                    &:first-of-type {
                        margin-left: 0;
                    }

                    &.copyright {
                        opacity: 0.7;

                        > div {
                            display: inline-block;
                        }
                        
                        .svg {
                            width: 110px;
                            display: inline-block;
                            margin-right: 5px;

                            svg {
                                fill: #FFF;
                                display: inline-block;
                                vertical-align: top;
                                max-width: 100%;
                                max-height: 100%;
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Styles;