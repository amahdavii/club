import { Swiper, SwiperSlide } from "swiper/react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
// SwiperCore.use([Navigation]);

import classes from "./dashboard.module.scss";

export default function AfterLogin() {
  return (
    <div className="alinclub__dashboardPage">
      <img
        className="w-auto"
        src="/assets/images/banner.png"
        alt="cta banner"
      />
      <div className="container mx-auto py-5">
        <section className="alinclub__dashboardItems grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className={classes.alinclub__dashboardMenu}>
              <div className={classes.alinclub__dashboardMenuTitle}>
                <img
                  src="/assets/images/alinclublogo.png"
                  alt="alinclub logo"
                />
                <div className={classes.alinclub__userReward}>
                  امتیاز شما:
                  <span className={classes.alinclub__userPoint}>
                    570
                    <img src="/assets/images/alincoin.png" alt="alincoin" />
                  </span>
                </div>
              </div>

              <ul className={classes.alinclub__dashboardMenuItems}>
                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>

                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>

                <li>
                  <a className={classes.alinclub__dashboardMenuItem} href="#">
                    <span className={classes.alinclub__dashboardItem}>
                      <i
                        className={classes.alinclub__dashboardIcon}
                        data-icon="b"
                      ></i>
                      طرح ها و جوایز
                    </span>
                    <i data-icon="f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-3">
            <div className={classes.alinclub__RewardSlider}>
              <div className={classes.alinclub__RewardSliderTitle}>
                <span>جوایز آلین کلاب</span>
                <div className={classes.alinclub__RewardArrows}>
                  <span>مشاهده همه</span>
                  <i data-icon="p"></i>
                  <i data-icon="k"></i>
                </div>
              </div>

              <div className={classes.alinclub__RewardSliderContainer}>
                <Swiper
                  slidesPerView={3.25}
                  spaceBetween={10}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={false}
                  // navigation={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className={classes.alinclub__voucher}>
                      <div className={classes.alinclub__voucherPoint}>
                        <span>600</span>
                        <img src="/assets/images/alincoin.png" alt="Alincoin" />
                      </div>
                      <div className={classes.alinclub__voucherDetail}>
                        <div className={classes.alinclub__voucherDetailTop}>
                          <img
                            className={classes.alinclub__voucerLogo}
                            src="/assets/images/takhfifan-logo.png"
                            alt="takhfifan"
                          />
                          <div className={classes.alinclub__progressBar}>
                            <CircularProgressbarWithChildren
                              value={20}
                              text={`${20}٪`}
                              strokeWidth={8}
                              styles={buildStyles({
                                pathColor: `rgb(237, 114, 3)`,
                                textColor: "#494f55",
                                textSize: "30px",
                              })}
                            ></CircularProgressbarWithChildren>
                          </div>
                        </div>

                        <div className={classes.alinclub__voucherDetailDesc}>
                          40٪ تخفیف تا سقف 20 هزارتومان برای خرید از تخفیفان
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.alinclub__voucher}>
                      <div className={classes.alinclub__voucherPoint}>
                        <span>600</span>
                        <img src="/assets/images/alincoin.png" alt="Alincoin" />
                      </div>
                      <div className={classes.alinclub__voucherDetail}>
                        <div className={classes.alinclub__voucherDetailTop}>
                          <img
                            className={classes.alinclub__voucerLogo}
                            src="/assets/images/takhfifan-logo.png"
                            alt="takhfifan"
                          />
                          <div className={classes.alinclub__progressBar}>
                            <CircularProgressbarWithChildren
                              value={20}
                              text={`${20}٪`}
                              strokeWidth={8}
                              styles={buildStyles({
                                pathColor: `rgb(237, 114, 3)`,
                                textColor: "#494f55",
                                textSize: "30px",
                              })}
                            ></CircularProgressbarWithChildren>
                          </div>
                        </div>

                        <div className={classes.alinclub__voucherDetailDesc}>
                          40٪ تخفیف تا سقف 20 هزارتومان برای خرید از تخفیفان
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={classes.alinclub__voucher}>
                      <div className={classes.alinclub__voucherPoint}>
                        <span>600</span>
                        <img src="/assets/images/alincoin.png" alt="Alincoin" />
                      </div>
                      <div className={classes.alinclub__voucherDetail}>
                        <div className={classes.alinclub__voucherDetailTop}>
                          <img
                            className={classes.alinclub__voucerLogo}
                            src="/assets/images/takhfifan-logo.png"
                            alt="takhfifan"
                          />
                          <div className={classes.alinclub__progressBar}>
                            <CircularProgressbarWithChildren
                              value={20}
                              text={`${20}٪`}
                              strokeWidth={8}
                              styles={buildStyles({
                                pathColor: `rgb(237, 114, 3)`,
                                textColor: "#494f55",
                                textSize: "30px",
                              })}
                            ></CircularProgressbarWithChildren>
                          </div>
                        </div>

                        <div className={classes.alinclub__voucherDetailDesc}>
                          40٪ تخفیف تا سقف 20 هزارتومان برای خرید از تخفیفان
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={classes.alinclub__voucher}>
                      <div className={classes.alinclub__voucherPoint}>
                        <span>600</span>
                        <img src="/assets/images/alincoin.png" alt="Alincoin" />
                      </div>
                      <div className={classes.alinclub__voucherDetail}>
                        <div className={classes.alinclub__voucherDetailTop}>
                          <img
                            className={classes.alinclub__voucerLogo}
                            src="/assets/images/takhfifan-logo.png"
                            alt="takhfifan"
                          />
                          <div className={classes.alinclub__progressBar}>
                            <CircularProgressbarWithChildren
                              value={20}
                              text={`${20}٪`}
                              strokeWidth={8}
                              styles={buildStyles({
                                pathColor: `rgb(237, 114, 3)`,
                                textColor: "#494f55",
                                textSize: "30px",
                              })}
                            ></CircularProgressbarWithChildren>
                          </div>
                        </div>

                        <div className={classes.alinclub__voucherDetailDesc}>
                          40٪ تخفیف تا سقف 20 هزارتومان برای خرید از تخفیفان
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className={classes.alinclub__lottaryCountDown}>
          <div className="flex items-center">
            <div className="w-2/3">
              <h2 className={classes.alinclub__lottaryCountDownTitle}>
                قرعه کشی
              </h2>
              <p className={classes.alinclub__lottaryCountDownDesc}>
                پایان هر فصل، در آلین ‌کلاب قرعه‌کشی برای جوایزی باارزش داریم که
                میتونید با هر ۵ امتیاز، یک بلیت شانس شرکت در قرعه‌کشی بگیرید
              </p>
            </div>
            <div className="w-1/3">
              <div className={classes.alinclub__countDownContainer}>
                <div className={classes.alinclub__countDown}>
                  <span className={classes.alinclub__countDownTime}>01</span>
                  <span className={classes.alinclub__countDownDate}>ثانیه</span>
                </div>
                <div className={classes.alinclub__countDown}>
                  <span className={classes.alinclub__countDownTime}>01</span>
                  <span className={classes.alinclub__countDownDate}>دقیقه</span>
                </div>
                <div className={classes.alinclub__countDown}>
                  <span className={classes.alinclub__countDownTime}>01</span>
                  <span className={classes.alinclub__countDownDate}>ساعت</span>
                </div>
                <div className={classes.alinclub__countDown}>
                  <span className={classes.alinclub__countDownTime}>01</span>
                  <span className={classes.alinclub__countDownDate}>روز</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

//  bg-white col-span-2
