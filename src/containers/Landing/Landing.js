import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
    Button
} from 'reactstrap';

// Images
import withLoading from 'components/withLoading/withLoading';
import landingOverviewImg from './LandingOverviewImg.png';
import aboutUsImg from './AboutUsImg.png';
import teachImg from './TeachBackground.png';

// CSS
import './landing.css';

// Components
import AppNavbar from '../../components/Layout/Navbar';
import AppFooter from '../../components/Layout/Footer';
import TeacherCard from '../../components/TeacherCard';

class Landing extends PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        isProcessing: PropTypes.bool.isRequired,
        processingText: PropTypes.string,
    };

    render() {
        return (
            <div className='landing-div'>
                <img className='background-img' src={landingOverviewImg} alt='overview' />
                <AppNavbar />
                <section className='overview' id='home'>
                    <section className='overview-info' >
                        <h2>FIRST STEP TOWARDS YOUR FUTURE</h2>
                        <p>
                            S.T.Logic offers outstanding private tuition to prepare students for standardised tests and national exams.
                        </p>
                        <Button className='btn--blue'>
                            Join us now
                        </Button>
                    </section>
                </section>
                <section className='about' id='about'>
                    <div className='section-header'>
                        <h2>ABOUT US</h2>
                        <svg width='108' height='9' viewBox='0 0 108 9'
                            fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M93.3155 9C89.4265 9 87.4457 7.21706 85.6979 5.64396C84.1199 4.22334 82.8732 3.10122 80.2094 3.10122C77.5456 3.10122 76.299 4.22334 74.7207 5.64396C72.9732 7.21706 70.9923 9 67.1031 9C63.214 9 61.2334 7.21706 59.4856 5.64396C57.9076 4.22334 56.6612 3.10122 53.9974 3.10122C51.3338 3.10122 50.0874 4.22334 48.5094 5.64396C46.7619 7.21706 44.7811 9 40.8919 9C37.0032 9 35.0229 7.21706 33.2754 5.64396C31.6976 4.22334 30.4513 3.10122 27.788 3.10122C25.1244 3.10122 23.878 4.22334 22.3 5.64396C20.5525 7.21706 18.5716 9 14.6827 9C10.7935 9 8.81268 7.21706 7.06491 5.64396C5.4869 4.22334 4.24052 3.10122 1.5767 3.10122C0.706097 3.10122 0 2.40706 0 1.55061C0 0.694415 0.706097 0 1.5767 0C5.46562 0 7.44647 1.78294 9.19424 3.35604C10.7723 4.77665 12.0189 5.89878 14.6827 5.89878C17.3463 5.89878 18.5927 4.77665 20.1707 3.3563C21.9182 1.78294 23.899 0 27.788 0C31.6766 0 33.6572 1.7832 35.4047 3.3563C36.9825 4.77691 38.2286 5.89878 40.8919 5.89878C43.5557 5.89878 44.8021 4.77665 46.3801 3.3563C48.1276 1.78294 50.1085 0 53.9974 0C57.8866 0 59.8672 1.78294 61.6149 3.3563C63.1929 4.77665 64.4396 5.89878 67.1031 5.89878C69.7672 5.89878 71.0136 4.77665 72.5916 3.3563C74.3394 1.78294 76.3202 0 80.2094 0C84.0986 0 86.0795 1.78294 87.8272 3.3563C89.4052 4.77665 90.6516 5.89878 93.3155 5.89878C95.9798 5.89878 97.2264 4.77665 98.805 3.35604C100.553 1.78294 102.534 0 106.423 0C107.294 0 108 0.694415 108 1.55061C108 2.40706 107.294 3.10122 106.423 3.10122C103.759 3.10122 102.512 4.22334 100.934 5.64396C99.186 7.21706 97.2052 9 93.3155 9Z' fill='#2F2F2F'/>
                        </svg>
                    </div>
                    <div className='about-info'>
                        <img src={aboutUsImg} alt='about' />
                        <div className='about-info-text'>
                            <svg width='109' height='32' viewBox='0 0 109 32'
                                fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M38.4526 24V1.12527H40.0485V22.498H50.9539V24H38.4526ZM68.5872 15.4728C68.5872 18.2474 67.9144 20.417 66.5688 21.9816C65.2233 23.5358 63.3666 24.3129 60.9988 24.3129C59.5072 24.3129 58.1929 23.9531 57.0559 23.2333C55.919 22.5136 55.048 21.481 54.443 20.1354C53.838 18.7898 53.5356 17.2356 53.5356 15.4728C53.5356 12.6982 54.2083 10.5391 55.5539 8.99531C56.8995 7.44112 58.7457 6.66402 61.0927 6.66402C63.4292 6.66402 65.2598 7.45155 66.5845 9.0266C67.9196 10.5912 68.5872 12.74 68.5872 15.4728ZM55.1628 15.4728C55.1628 17.8093 55.6739 19.6347 56.6961 20.949C57.7287 22.2528 59.1838 22.9048 61.0614 22.9048C62.9389 22.9048 64.3888 22.2528 65.411 20.949C66.4437 19.6347 66.96 17.8093 66.96 15.4728C66.96 13.1259 66.4384 11.3057 65.3954 10.0123C64.3627 8.71889 62.9076 8.07218 61.0301 8.07218C59.1525 8.07218 57.7027 8.71889 56.6804 10.0123C55.6686 11.2953 55.1628 13.1155 55.1628 15.4728ZM86.5647 6.99259V8.07218L83.0443 8.29123C83.983 9.45948 84.4524 10.7425 84.4524 12.1402C84.4524 13.7778 83.9048 15.1078 82.8096 16.13C81.7248 17.1418 80.2645 17.6476 78.4286 17.6476C77.6568 17.6476 77.1144 17.6164 76.8014 17.5538C76.186 17.8771 75.7166 18.2578 75.3933 18.6959C75.0699 19.134 74.9082 19.5982 74.9082 20.0885C74.9082 20.6309 75.1116 21.0272 75.5184 21.2776C75.9357 21.5279 76.6293 21.6531 77.5994 21.6531H80.5722C82.4184 21.6531 83.8318 22.0286 84.8123 22.7796C85.7928 23.5202 86.283 24.6206 86.283 26.0809C86.283 27.875 85.5529 29.2571 84.0926 30.2272C82.6427 31.2077 80.5722 31.6979 77.881 31.6979C75.7427 31.6979 74.0842 31.2859 72.9055 30.4619C71.7373 29.6378 71.1532 28.4905 71.1532 27.0197C71.1532 25.8515 71.513 24.8814 72.2327 24.1095C72.9629 23.3376 73.9486 22.8109 75.1899 22.5293C74.6788 22.3102 74.2668 22.0025 73.9538 21.6061C73.6513 21.1993 73.5001 20.7352 73.5001 20.2136C73.5001 19.0767 74.225 18.0753 75.6749 17.2096C74.684 16.8028 73.9121 16.1665 73.3593 15.3007C72.8064 14.4245 72.53 13.4232 72.53 12.2967C72.53 10.5964 73.0672 9.23521 74.1416 8.213C75.2264 7.18035 76.6867 6.66402 78.5225 6.66402C79.6386 6.66402 80.5044 6.77355 81.1198 6.99259H86.5647ZM72.796 26.8789C72.796 29.2154 74.5327 30.3836 78.0062 30.3836C82.4706 30.3836 84.7028 28.9598 84.7028 26.1122C84.7028 25.09 84.3533 24.3494 83.6545 23.8905C82.9556 23.4315 81.8239 23.202 80.2592 23.202H77.4742C74.3554 23.202 72.796 24.4277 72.796 26.8789ZM74.0946 12.2967C74.0946 13.6109 74.491 14.6331 75.2838 15.3633C76.0869 16.083 77.1561 16.4429 78.4912 16.4429C79.9098 16.4429 80.9946 16.083 81.7456 15.3633C82.5071 14.6436 82.8878 13.6005 82.8878 12.2341C82.8878 10.7842 82.4966 9.69938 81.7143 8.97966C80.9425 8.2495 79.8577 7.88443 78.4599 7.88443C77.1039 7.88443 76.0348 8.27558 75.2525 9.05789C74.4806 9.82977 74.0946 10.9094 74.0946 12.2967ZM91.6184 24H90.0694V6.99259H91.6184V24ZM89.8504 2.26745C89.8504 1.26609 90.1789 0.765411 90.8361 0.765411C91.1594 0.765411 91.4098 0.895796 91.5871 1.15657C91.7748 1.41734 91.8687 1.78763 91.8687 2.26745C91.8687 2.73683 91.7748 3.10712 91.5871 3.37832C91.4098 3.64953 91.1594 3.78513 90.8361 3.78513C90.1789 3.78513 89.8504 3.27923 89.8504 2.26745ZM104.12 24.3129C101.689 24.3129 99.7857 23.5463 98.4088 22.0129C97.032 20.4796 96.3435 18.3413 96.3435 15.598C96.3435 12.7817 97.058 10.5912 98.487 9.0266C99.9161 7.45155 101.872 6.66402 104.354 6.66402C105.825 6.66402 107.233 6.91958 108.579 7.43069L108.156 8.80755C106.686 8.3173 105.408 8.07218 104.323 8.07218C102.237 8.07218 100.657 8.71889 99.5823 10.0123C98.5079 11.2953 97.9707 13.1468 97.9707 15.5667C97.9707 17.8615 98.5079 19.6608 99.5823 20.9646C100.657 22.2581 102.159 22.9048 104.088 22.9048C105.632 22.9048 107.066 22.6284 108.391 22.0755V23.515C107.306 24.0469 105.882 24.3129 104.12 24.3129Z' fill='#212D4D'/>
                                <path d='M15.3816 17.6476C15.3816 19.7129 14.6358 21.3401 13.1442 22.5293C11.663 23.7184 9.59768 24.3129 6.94826 24.3129C4.50746 24.3129 2.34828 23.854 0.470742 22.9361V18.43C2.0145 19.1184 3.31835 19.6034 4.38229 19.8851C5.45666 20.1667 6.43715 20.3075 7.32377 20.3075C8.38771 20.3075 9.20131 20.1041 9.76458 19.6973C10.3383 19.2905 10.6251 18.6855 10.6251 17.8823C10.6251 17.4338 10.4999 17.0374 10.2496 16.6932C9.99927 16.3386 9.62898 15.9996 9.13873 15.6762C8.65891 15.3529 7.6732 14.8365 6.1816 14.1273C4.78387 13.4701 3.73558 12.8391 3.03672 12.2341C2.33785 11.6291 1.77981 10.925 1.36257 10.1218C0.945343 9.31866 0.736727 8.37989 0.736727 7.30552C0.736727 5.28194 1.41994 3.69125 2.78638 2.53343C4.16324 1.37561 6.06165 0.796704 8.48159 0.796704C9.6707 0.796704 10.8024 0.937519 11.8768 1.21915C12.9616 1.50078 14.0934 1.89715 15.272 2.40826L13.7074 6.17899C12.487 5.67831 11.4752 5.32888 10.6721 5.1307C9.87932 4.93251 9.09701 4.83342 8.32513 4.83342C7.40722 4.83342 6.70314 5.04725 6.21289 5.47491C5.72265 5.90258 5.47752 6.46062 5.47752 7.14906C5.47752 7.57672 5.57661 7.95223 5.7748 8.27558C5.97298 8.58851 6.28591 8.89621 6.71357 9.19871C7.15166 9.49077 8.1791 10.0227 9.79587 10.7946C11.9342 11.8168 13.3997 12.8443 14.1924 13.8769C14.9852 14.8991 15.3816 16.156 15.3816 17.6476ZM28.3522 24H23.5019V5.16199H17.2904V1.12527H34.5638V5.16199H28.3522V24Z' fill='#0F5AEC'/>
                            </svg>
                            <p>offers outstanding private tuition to prepare students for standardised tests and national exams.
                                <br />
                                <br />
                            We tutor for the SAT, SAT Subject Tests, ACT, SSAT, ISEE, GRE, GMAT and LSAT admission tests and for GCSE, A-Levels, IB, and AP exams. We also provide general tutoring for the American, British, International Baccalaureate and French Lycee Curricula.
                                <br />
                                <br />
                            All of our tutors have achieved the highest possible score on every exam they teach.
                                <br />
                                <br />
                            Students can be taught one-to-one, in pairs, in small groups (often in schools during weekly group sessions) or through one of our five day intensive courses.
                                <br />
                                <br />
                            The majority of tuition takes place at one of our London teaching centres.  If this location isn't practical we also offer home tuition. Although we are London based we have taught students in far away locations, so please contact us to discuss the options.
                                <br />
                                <br />
                            We are continuously expanding the range of tests and subjects we tutor.  If you can't find your test listed on our site please contact us.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='teach' id='teach'>
                    <div className='section-header'>
                        <h2>Featured Tutor</h2>
                        <svg width='108' height='9' viewBox='0 0 108 9'
                            fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M93.3155 9C89.4265 9 87.4457 7.21706 85.6979 5.64396C84.1199 4.22334 82.8732 3.10122 80.2094 3.10122C77.5456 3.10122 76.299 4.22334 74.7207 5.64396C72.9732 7.21706 70.9923 9 67.1031 9C63.214 9 61.2334 7.21706 59.4856 5.64396C57.9076 4.22334 56.6612 3.10122 53.9974 3.10122C51.3338 3.10122 50.0874 4.22334 48.5094 5.64396C46.7619 7.21706 44.7811 9 40.8919 9C37.0032 9 35.0229 7.21706 33.2754 5.64396C31.6976 4.22334 30.4513 3.10122 27.788 3.10122C25.1244 3.10122 23.878 4.22334 22.3 5.64396C20.5525 7.21706 18.5716 9 14.6827 9C10.7935 9 8.81268 7.21706 7.06491 5.64396C5.4869 4.22334 4.24052 3.10122 1.5767 3.10122C0.706097 3.10122 0 2.40706 0 1.55061C0 0.694415 0.706097 0 1.5767 0C5.46562 0 7.44647 1.78294 9.19424 3.35604C10.7723 4.77665 12.0189 5.89878 14.6827 5.89878C17.3463 5.89878 18.5927 4.77665 20.1707 3.3563C21.9182 1.78294 23.899 0 27.788 0C31.6766 0 33.6572 1.7832 35.4047 3.3563C36.9825 4.77691 38.2286 5.89878 40.8919 5.89878C43.5557 5.89878 44.8021 4.77665 46.3801 3.3563C48.1276 1.78294 50.1085 0 53.9974 0C57.8866 0 59.8672 1.78294 61.6149 3.3563C63.1929 4.77665 64.4396 5.89878 67.1031 5.89878C69.7672 5.89878 71.0136 4.77665 72.5916 3.3563C74.3394 1.78294 76.3202 0 80.2094 0C84.0986 0 86.0795 1.78294 87.8272 3.3563C89.4052 4.77665 90.6516 5.89878 93.3155 5.89878C95.9798 5.89878 97.2264 4.77665 98.805 3.35604C100.553 1.78294 102.534 0 106.423 0C107.294 0 108 0.694415 108 1.55061C108 2.40706 107.294 3.10122 106.423 3.10122C103.759 3.10122 102.512 4.22334 100.934 5.64396C99.186 7.21706 97.2052 9 93.3155 9Z' fill='#fff'/>
                        </svg>
                    </div>
                    <img className='teach-background' src={teachImg} alt='teach' />

                    <div className='teach-items'>
                        <TeacherCard
                            img='https://placehold.it/100'
                            name='David'
                            bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            detailLink='#detail'/>
                        <TeacherCard
                            img='https://placehold.it/100'
                            name='David'
                            bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            detailLink='#detail'/>
                        <TeacherCard
                            img='https://placehold.it/100'
                            name='David'
                            bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            detailLink='#detail'/>
                        <TeacherCard
                            img='https://placehold.it/100'
                            name='David'
                            bio='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                            detailLink='#detail'/>
                    </div>
                </section>
                <AppFooter />
            </div>
        );
    }
}

export default withLoading(Landing);
