import { Component, OnInit } from "@angular/core";
import * as thisApp from 'tns-core-modules/application';
import { TNSPlayer } from 'nativescript-audio';

declare var com: any;

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    private _player;
    public _is_player_ready: boolean = true;

    private ctx = new android.content.ContextWrapper(thisApp.android.context);
    private mShouldUnbind: boolean;
    //@ts-ignore
    public FAudioService: com.tns.ForegroundAudioService;

    
    constructor() {
        this._player = new TNSPlayer();
    }

    public FASConnection = new android.content.ServiceConnection({
        onServiceConnected: (className: android.content.ComponentName, service: android.os.IBinder) => {
            //@ts-ignore
            let mLocalBinder = <com.tns.ForegroundAudioService.LocalBinder>service;
            // Here you get the ForegroundAudioService instance
            this.FAudioService = mLocalBinder.getService();
        },

        onServiceDisconnected: (className: android.content.ComponentName) => {
            this.FAudioService = null;
        }

    });

    doBindService(): void {
        if (this.ctx.bindService(
            new android.content.Intent(
                this.ctx.getApplicationContext(),
                com.tns.ForegroundAudioService.class
            ),
            this.FASConnection,
            android.content.Context.BIND_AUTO_CREATE
        )) {
            this.mShouldUnbind = true;
        } else {
            android.util.Log.e("xX()Xx", "Foreground didn't start");
        }
    }

    doUnbindService(): void {
        if (this.mShouldUnbind) {
            this.ctx.unbindService(this.FASConnection);
            this.mShouldUnbind = false;
        }
    }

    ngOnInit(): void {
        this.doBindService();
        thisApp.on(thisApp.exitEvent, (args) => {
            this.doUnbindService();
        });
    }

    toggle_player() {
        if (this._player.isAudioPlaying()) {
            this.pause();
        } else {
            this.play();
        }
    }

    pause () {
        this.FAudioService.stop_playing();
    }

    play() {
        this._is_player_ready = false;
        this._player.initFromUrl({
            audioFile: "https://playerservices.streamtheworld.com/api/livestream-redirect/ASPEN.mp3",
            loop: false
        }).then(
            () => {
                this.FAudioService.set_player(
                    this._player.android
                );
                this.FAudioService.start_playing();
                this._is_player_ready = true;
            }
        );
    }

}
