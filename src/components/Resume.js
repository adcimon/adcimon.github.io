import { html } from '../html.js';

export function Resume({ show }) {
	if (!show) return null;

	return html`
		<div class="box box-content">
			<div class="pb-0 pb-sm-2">
				<p>
					Senior software engineer specialized in full-stack cloud-native systems that
					integrate AI, real-time streaming and interactive graphics. Over 10 years of
					experience building high-performance production-grade systems and leading
					multidisciplinary teams. Passionate about technologies that have a positive impact
					on users and projects that present a challenging opportunity to grow.
				</p>
			</div>

			<div class="mt-1">
				<div class="row">
					<div class="col-12 col-lg-6">
						<div class="case-item">
							<img
								class="case-item__icon"
								src="assets/images/icons/web_development.svg" />
							<div>
								<h3 class="title title--h4">Web Development</h3>
								<p class="case-item__caption">
									Proficient in full-stack applications, cloud-based architectures and
									CI/CD workflows with emphasis on performance, reliability, and
									maintainability.
								</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6">
						<div class="case-item">
							<img
								class="case-item__icon"
								src="assets/images/icons/artificial_intelligence.svg" />
							<div>
								<h3 class="title title--h4">Artificial Intelligence</h3>
								<p class="case-item__caption">
									Exploring how AI can enhance product value and development workflows
									integrating agent pipelines like STT/LLM/TTS and video pipelines
									like AI video matting/chroma keying.
								</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6">
						<div class="case-item">
							<img
								class="case-item__icon"
								src="assets/images/icons/media_streaming.svg" />
							<div>
								<h3 class="title title--h4">Media Streaming</h3>
								<p class="case-item__caption">
									Specialized in real-time streaming architectures that achieve
									low-latency, seamless synchronization, efficient encoding/decoding,
									and scalability for interactive applications such as live virtual
									productions and remote collaboration applications.
								</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6">
						<div class="case-item">
							<img
								class="case-item__icon"
								src="assets/images/icons/graphics.svg" />
							<div>
								<h3 class="title title--h4">Computer Graphics</h3>
								<p class="case-item__caption">
									Experienced in designing and developing 3D engines and interactive
									environments, from real-time rendering pipelines to XR systems.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<h2 class="title title--h3">
						<img
							class="title-icon"
							src="assets/images/icons/education.svg"
							alt="" />
						Education
					</h2>
					<div class="timeline">
						<article class="timeline__item">
							<h5 class="title title--h5 timeline__title">
								Master's Degree in Secondary Education Teaching
							</h5>
							<div>
								<a href="https://www.uv.es/"> Universitat de València </a>
							</div>
							<div class="timeline__period">2022 — 2023</div>
							<div class="timeline__description">
								<ul>
									<li>
										<strong>Specialization:</strong> Computer Science and Electronic
										Systems.
									</li>
								</ul>
							</div>
						</article>
						<article class="timeline__item">
							<h5 class="title title--h5 timeline__title">
								Master's Degree in Artificial Intelligence, Pattern Recognition and
								Digital Imaging
							</h5>
							<div>
								<a href="https://www.upv.es/titulaciones/MUIARFID/">
									Universitat Politècnica de València
								</a>
							</div>
							<div class="timeline__period">2016 — 2017</div>
							<div class="timeline__description">
								<ul>
									<li>
										<strong>Final project:</strong>${' '}
										<a
											href="https://riunet.upv.es/entities/publication/07441873-f96d-4b3f-af05-326111983bb8">
											Rendering of distance functions using raymarching in Unity
										</a>${' '}
										(<a href="https://github.com/adcimon/com.adcimon.raymarching"
											><i class="font-icon icon-github1"></i></a
										>).
									</li>
									<li>
										Artificial intelligence, machine learning and deep learning.
									</li>
									<li>Computer graphics, game engines and mixed reality.</li>
								</ul>
							</div>
						</article>
						<article class="timeline__item">
							<h5 class="title title--h5 timeline__title">Computer Engineering</h5>
							<div>
								<a href="https://www.upv.es/en">Universitat Politècnica de València</a>
							</div>
							<div class="timeline__period">2008 — 2015</div>
							<div class="timeline__description">
								<ul>
									<li>
										<strong>Final Project:</strong>${' '}
										<a
											href="https://riunet.upv.es/entities/publication/15590867-9786-4027-ac93-c72e2a87f057"
											>Development of a cross-platform game with augmented reality
											in Unity</a
										>.
									</li>
									<li>
										<strong>Specialization:</strong> Computer graphics, computer
										vision and robotics.
									</li>
									<li>
										<div><strong>(2014) Erasmus</strong></div>
										<div>
											<a href="https://www.sdu.dk/en"> Syddansk Universitet </a>
										</div>
										<div>Game design and programming, .NET and Android.</div>
									</li>
									<li>
										<div>
											<strong>(2013) Erasmus Intensive Program: Human-Machine
											Interaction</strong>
										</div>
										<div>
											<a href="https://www.univ-reims.eu/">
												Université de Reims-Champagne-Ardenne
											</a>
										</div>
										<div>
											Design and simulation of a robotic system made for the
											handling and storage of champagne bottles in the cellars
											using 3D software and SCADA systems.
										</div>
									</li>
								</ul>
							</div>
						</article>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<h2 class="title title--h3">
						<img
							class="title-icon"
							src="assets/images/icons/experience.svg"
							alt="" />
						Experience
					</h2>
					<div class="timeline">
						<article class="timeline__item">
							<h5 class="title title--h5 timeline__title">
								Brainstorm Multimedia${' '}
								<a href="https://www.brainstorm3d.com/">
									<i class="font-icon icon-link"></i>
								</a>
							</h5>
							<div class="timeline__period">2020 — Present</div>
							<div class="timeline__period">Senior Software Engineer</div>
							<div class="timeline__description">
								<ul>
									<li>
										<a href="https://studiocall.brainstorm3d.com/"> StudioCall</a>
										<br />
										Real-time streaming application for 3D video conferencing and
										live virtual productions used in broadcast environments
										compatible with WebRTC/NDI/RTMP/HLS deployed on${' '}
										<a href="https://aws.amazon.com/">AWS</a>.
										<ul>
											<li>
												Frontend:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/nodejs.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/vite.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/typescript.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/react.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/mui.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/webgl.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/threejs.svg" />
											</li>
											<li>
												Backend:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/nodejs.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/typescript.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/nestjs.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/go.svg" />
											</li>
											<li>
												Infrastructure:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/docker.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/terraform.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/aws.svg" />${' '}
												<sub>(ECS/Cognito/DynamoDB/S3/CloudFront)</sub>
											</li>
											<li>
												Services:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/stripe.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/livekit.svg" />
											</li>
											<li>
												Integration of AI-based conversational multimodal agents
												with STT/LLM/TTS pipelines using${' '}
												<a href="https://github.com/livekit/agents">LiveKit Agents</a>.
											</li>
											<li>
												Development of an AI-based video matting/chroma keying
												pipeline using${' '}
												<a href="https://github.com/PeterL1n/RobustVideoMatting">RobustVideoMatting</a>.
											</li>
										</ul>
									</li>
									<li>
										<a href="https://go.brainstorm3d.com/"> Brainstorm SaaS</a>
										<br />
										Software-as-a-service serverless application made to use
										Brainstorm Suite products on${' '}
										<a href="https://aws.amazon.com/">AWS</a>.
										<ul>
											<li>
												Frontend:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/nodejs.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/vite.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/typescript.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/react.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/mui.svg" />
											</li>
											<li>
												Backend:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/python.svg" />${' '}
												<sub>(Lambda)</sub>
											</li>
											<li>
												Infrastructure:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/terraform.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/aws.svg" />${' '}
												<sub>(Lambda/Cognito/DynamoDB/S3/CloudFront)</sub>
											</li>
											<li>
												Services:${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/stripe.svg" />
											</li>
										</ul>
									</li>
									<li>
										<a href="https://www.brainstorm3d.com/products/infinityset/">InfinitySet</a>
										<br />
										Virtual set and XR/AR engine solution for live events integrated
										with${' '}
										<a href="https://www.unrealengine.com/">Unreal Engine</a>.
										<ul>
											<li>
												<img class="stack-badge" src="https://adcimon.github.io/badges/cpp.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/directx.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/opengl.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/ffmpeg.svg" />
											</li>
										</ul>
									</li>
									<li>
										<a href="https://www.brainstorm3d.com/products/edison/">Edison</a>
										<br />
										Inmersive AR solution for online presentations.
										<ul>
											<li>
												<img class="stack-badge" src="https://adcimon.github.io/badges/cpp.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/directx.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/opengl.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/ffmpeg.svg" />
											</li>
										</ul>
									</li>
									<li>
										Integration of <a href="https://livekit.io/">LiveKit</a> and${' '}
										<a href="https://trtc.io/">TencentRTC</a> into Brainstorm Suite
										products, enabling production-grade remote interaction and
										collaboration.
									</li>
									<li>
										Development of a WebRTC/NDI real-time streaming pipeline with${' '}
										<a href="https://webrtc.googlesource.com/src/">libwebrtc</a>
										that allows remote control and previsualization of Brainstorm
										Suite products.
									</li>
									<li>
										<a href="https://www.brainstorm3d.com/corporate/research-and-development/">Research & Development</a>
										<br />
										Leading role in${' '}
										<a href="http://www.admire3d.eu/">Advanced Mixed Realities</a>${' '}
										(<a href="https://www.youtube.com/watch?v=44Ka9zlbpT8"
											><i class="font-icon icon-youtube1"></i></a
										>) and${' '}
										<a href="https://newsinitiative.withgoogle.com/dnifund/dni-projects/TelePorter/">
											Google Digital News Initiative Teleporter</a>${' '}
										(<a href="https://www.youtube.com/watch?v=ZX5zu1fVduo"
											><i class="font-icon icon-youtube1"></i></a
										>) projects that explored the use of XR and real-time video in
										live TV productions with AI-based background extraction and
										super resolution.
									</li>
								</ul>
							</div>
						</article>
						<article class="timeline__item">
							<h5 class="title title--h5 timeline__title">
								Baintex Technologies${' '}
								<a href="https://www.baintex.com/uk/">
									<i class="font-icon icon-link"></i>
								</a>
							</h5>
							<div class="timeline__period">2017 — 2019</div>
							<div class="timeline__period">Software Engineer</div>
							<div class="timeline__description">
								<ul>
									<li>
										<a href="https://www.baintex.com/">Baintex</a>
										<br />
										Smart home IoT ecosystem.
										<ul>
											<li>
												Client applications that provide home automation control
												and monitoring using WiFi and Bluetooth communication
												with the central hub and peripheral devices.
												<ul>
													<li style=${{ listStyleType: 'circle' }}>
														<img class="stack-badge" src="https://adcimon.github.io/badges/typescript.svg" />${' '}
														<img class="stack-badge" src="https://adcimon.github.io/badges/react.svg" />${' '}
														<img class="stack-badge" src="https://adcimon.github.io/badges/java.svg" />${' '}
														<img class="stack-badge" src="https://adcimon.github.io/badges/android.svg" />
													</li>
												</ul>
											</li>
											<li>
												Server infrastructure that provides services for user
												management, event handling and real-time streaming.
												<ul>
													<li style=${{ listStyleType: 'circle' }}>
														<img class="stack-badge" src="https://adcimon.github.io/badges/c.svg" />${' '}
														<img class="stack-badge" src="https://adcimon.github.io/badges/python.svg" />${' '}
														<img class="stack-badge" src="https://adcimon.github.io/badges/django.svg" />${' '}
														<img class="stack-badge" src="https://adcimon.github.io/badges/go.svg" />
													</li>
												</ul>
											</li>
											<li>
												Development of a new RTP-based real-time streaming
												pipeline <sub>(previously RTMP-based)</sub> enabling
												bidirectional audio and video communication between the
												central hub and client applications, providing
												low-latency and reliable connectivity.
											</li>
											<li>
												Development of an AI-based infant cry detection pipeline
												that processes live audio streams captured by the
												central hub classifying infant distress events using
												support vector machines.
											</li>
										</ul>
									</li>
									<li>
										<a href="https://www.youtube.com/watch?v=UE9zPuvrNMo">Baintex VR</a>
										<br />
										Virtual reality application made with${' '}
										<a href="https://unity.com/">Unity</a> and Oculus that helps
										customers to explore and understand the smart home ecosystem.
										The experience improved user engagement and supported the
										marketing team in physical stores by effectively demonstrating
										and promoting the company products.
									</li>
								</ul>
							</div>
						</article>
						<article class="timeline__item">
							<h5 class="title title--h5 timeline__title">
								Sopra Steria${' '}
								<a href="https://www.soprasteria.com/">
									<i class="font-icon icon-link"></i>
								</a>
							</h5>
							<div class="timeline__period">2015 — 2016</div>
							<div class="timeline__period">Backend Engineer</div>
							<div class="timeline__description">
								<ul>
									<li>
										Development and maintenance of fintech applications.
										<ul>
											<li style=${{ listStyleType: 'circle' }}>
												<img class="stack-badge" src="https://adcimon.github.io/badges/java.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/spring.svg" />${' '}
												<img class="stack-badge" src="https://adcimon.github.io/badges/nodejs.svg" />
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</article>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<h2 class="title title--h3">
						<img
							class="title-icon"
							src="assets/images/icons/certifications.svg"
							alt="" />
						Certifications
					</h2>
					<div class="box box__border">
						<div>
							<h4 class="title title--h5 timeline__title">Languages</h4>
							<div class="timeline__period">
								Common European Framework of Reference for Languages (<a
									href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions"
									>CEFR</a
								>)
							</div>
							<div>
								<ul>
									<li><strong>English:</strong> C1</li>
									<li><strong>Español / Castellano:</strong> Native</li>
									<li><strong>Valencià / Català:</strong> Native</li>
								</ul>
							</div>
						</div>

						<div>
							<h4 class="title title--h5 timeline__title">
								Development of games for Windows, Mac, Web, iOS and Android with Unity
							</h4>
							<div>
								<a href="https://www.upv.es/en">Universitat Politècnica de València</a>
							</div>
							<div class="timeline__period">2012</div>
							<div>
								<ul>
									<li>
										Advanced course focused on multiplatform development, industry
										standard workflows and modern rendering pipelines.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />

			<div class="row">
				<div class="col-12">
					<h2 class="title title--h3">
						<img
							class="title-icon"
							src="assets/images/icons/toolbox.svg"
							alt="" />
						Toolbox
					</h2>
					<p>Core technology stack and familiar tools.</p>
					<div class="box box__border">
						<div>
							<h4 class="title title--h4">Languages</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/c.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/cpp.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/csharp.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/python.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/go.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/javascript.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/typescript.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">Web</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/http.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/html.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/css.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/svg.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/tailwindcss.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/mui.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/react.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/vite.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/nodejs.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/nestjs.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/electron.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">Cloud</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/aws.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/stripe.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">Databases</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/mysql.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/postgresql.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/mongodb.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/dynamodb.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/redis.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/sqlite.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">Streaming</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/ffmpeg.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/gstreamer.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/webrtc.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/pion.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/livekit.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/ndi.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">Graphics</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/unreal.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/unity.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/directx.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/hlsl.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/opengl.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/glsl.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/threejs.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/webgl.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/boost.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">DevOps</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/windows.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/linux.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/cmake.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/git.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/mercurial.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/github.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/gitlab.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/jenkins.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/docker.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/terraform.svg" />
							</div>
						</div>
						<br />

						<div>
							<h4 class="title title--h4">Programs</h4>
							<div>
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/visual_studio.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/visual_studio_code.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/wireshark.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/photoshop.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/blender.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/davinci_resolve.svg" />${' '}
								<img class="toolbox-badge" src="https://adcimon.github.io/badges/obs_studio.svg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}
