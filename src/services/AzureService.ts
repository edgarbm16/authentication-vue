import {Ref, ref} from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'

class AzureService {
    private msalConfig:Ref<IMsalConfig>
    private accessToken:Ref<string>

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: '90f4cc5f-3bc7-4cad-bfd2-aba77f2634ca',
                authority: 'https://login.microsoftonline.com/fc793a24-a9f5-4629-99fd-fce4a4bfd41d',
            },
            cache: {
                cacheLocation: 'localStorage',
            }
        })
        this.accessToken = ref('')
    }

    setAccessToken(token:string):Ref<string>{
        this.accessToken.value = token
        return this.accessToken
    }

    getAccessToken():Ref<string> {
        return this.accessToken
    }
    
    getMsalConfig():Ref<IMsalConfig> {
        return this.msalConfig
    }
}

export default AzureService
