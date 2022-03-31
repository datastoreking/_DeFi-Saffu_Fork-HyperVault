import React, { useRef, useEffect, useCallback } from "react";
import metamask from "../Images/metamask.png"
import walletconnect from "../Images/coinbase.png"
import "./connectwallet.css";

const ConnectWallet = ({ showModal, setShowModal, walletProvider, setWalletProvider}) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
				console.log("I pressed");
			}
		},
		[setShowModal, showModal]
	);

	const connectwalletHandler = async () => {
		setShowModal(false);
		var metamaskProvider = window.ethereum;
		await metamaskProvider.request({ method: 'eth_requestAccounts' });
		setWalletProvider(metamaskProvider);
	}

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	useEffect(() => {
		if(walletProvider) {
			setShowModal(false);
		}
	});

	return (
		<>
			{showModal ? (
				<div className="wallet-container" onClick={closeModal} ref={modalRef}>
					<div className="wallet-wrap">
						<div className="wallets border-btm" onClick={connectwalletHandler}>
							<img src={metamask} alt="Meta mask Logo" />
							<h1>Metamask / Injected</h1>
							<p>Connect with the provider in your Browser or Dapp</p>
						</div>
						<div className="wallets bg-gray">
							<img src={walletconnect} alt="Meta mask Logo" />
							<h1>WalletConnect</h1>
							<p>Scan with WalletConnect to connect</p>
						</div>
						<div
							className="close"
							onClick={() => {
								setShowModal(!showModal);
							}}
						>
							<div className="line1"></div>
							<div className="line2"></div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default ConnectWallet;
