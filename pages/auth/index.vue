<script setup lang="ts">
//@ts-ignore
import type { Container } from "tsparticles-engine";
import { particlesOptions } from '~/data/tsparticlesOptions'

definePageMeta({
  layout: false,
});


// See tsParticles documentation for all available options
const options = particlesOptions

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 2000);
};


</script>

<template>
  <!-- Page Content -->
  <div id="tsparticles1" class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Sign In Section -->
      <div class="bg-body-extra-light">
        <div class="content content-full">
          <div class="row g-0 justify-content-center">
            <div
              class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5 position-static"
              style="z-index: 2"
            >
              <!-- Sign In && Register Form -->
              
                <AuthForm />

              <!-- END Sign In Form -->
            </div>
          </div>
        </div>
      </div>
      <!-- END Sign In Section -->

      <!-- Footer -->

      <!-- END Footer -->
    </div>
  </div>
  <!-- END Page Content -->
</template>
	
