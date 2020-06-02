/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class ThankYouScene extends Phaser.Scene {
  constructor() {
    super('ThankYou');
  }

  init() {
    this.gamepad = undefined;
    this.buttonPressed = false;
    this.startScene = undefined;
    this.height = this.game.config.height;
    this.width = this.game.config.width;
  }

  create() {
    this.createThankYou();
    this.createAnimations();
    this.countdown();
    this.keyboardInputs();
  }

  update() {
    if (this.input.gamepad.total > 0) {
      this.gamepad = this.input.gamepad.getPad(0);
    }
    if (this.startScene) {
      if (this.gamepad) {
        this.gamepadInputs();
      }
    }
  }

  createThankYou() {
    this.add
      .text(
        this.width / 2 + 10,
        this.height / 2 - 150,
        'THANKS  FOR  PLAYING!',
        {
          fontFamily: 'ArcadeClassic',
          fontSize: '75px',
        },
      )
      .setTint(0xffffff)
      .setOrigin(0.5, 0.5);

    this.acceptText = this.add
      .text(
        this.width / 2 - 255,
        this.height / 2 + 80,
        'Press  A  or  Enter  to  continue',
        { fontFamily: 'ArcadeClassic', fontSize: '35px' },
      )
      .setTint(0xffffff);

    this.background = this.add
      .sprite(this.width / 2, this.height / 2, 'highscoreBG')
      .setScale(6.2, 9);
    this.eyes = this.add
      .sprite(this.width / 2, this.height / 2 - 120, 'highscoreEyes')
      .setScale(5);
  }

  createAnimations() {
    this.acceptTextFade = this.tweens.add({
      targets: this.acceptText,
      alpha: 0,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
      duration: 1200,
    });

    this.eyes.play('blink');
    this.background.anims.playReverse('closeMouth');
  }

  keyboardInputs() {
    this.enterInput = this.input.keyboard.on('keyup_ENTER', this.enter, this);
  }

  gamepadInputs() {
    // A button
    if (this.gamepad.id.indexOf('Pro Controller') !== -1) {
      if (this.gamepad.buttons[1].pressed) {
        this.buttonPressed = true;
        this.enter();
      }
      if (!this.gamepad.buttons[1].pressed) {
        this.buttonPressed = false;
      }
    } else {
      if (this.gamepad.A && this.buttonPressed === false) {
        this.buttonPressed = true;
        this.enter();
      }
      if (!this.gamepad.A) {
        this.buttonPressed = false;
      }
    }
  }

  countdown() {
    if (!this.startScene) {
      const startTimer = this.time.addEvent({
        delay: 500,
        repeat: 1,
        callback: () => {
          if (startTimer.repeatCount === 1) {
            this.startScene = true;
          }
        },
      });
    }
  }

  enter() {
    this.startScene = false;
    this.background.play('closeMouth');
    this.background.on('animationcomplete', () => {
      this.scene.start('Title');
    });
  }
}